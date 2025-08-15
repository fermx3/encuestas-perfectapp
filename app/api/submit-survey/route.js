import { prisma } from "@/lib/prisma";
import { getSurveyById } from "@/lib/preguntas";

export async function POST(req) {
  try {
    const {surveyId, answers} = await req.json();
    console.log("Received surveyId:", surveyId);
    console.log("Received answers:", answers);

    // Basic validation

    if (!surveyId || !answers) {
      return new Response(
        JSON.stringify({ error: "Faltan datos necesarios para procesar la encuesta" }),
        { status: 400 }
      );
    }

    // Check if surveyId is valid
    if (typeof parseInt(surveyId) !== "number" || surveyId <= 0) {
      return new Response(
        JSON.stringify({ error: "ID de encuesta inválido" }),
        { status: 400 }
      );
    }

    // Check if answers is an object

    if (
      !answers ||
      typeof answers !== "object" ||
      Array.isArray(answers)
    ) {
      return new Response(
        JSON.stringify({ error: "Formato de respuestas inválido" }),
        {
          status: 400,
        }
      );
    }

    // Validate each question response
    const validAnswers = {};

    const survey_questions = await getSurveyById(surveyId);

    for (const question of survey_questions.flatMap((section) => section.questions)) {
      const userAnswer = answers[question.id];

      if (userAnswer === undefined || userAnswer === null) {
        return new Response(
          JSON.stringify({ question_id: question.id, error: `Respuesta faltante para la pregunta ${question.id}` }),
          { status: 400 }
        );
      } // Check that are not empty answers

      switch (question.questionType) {
        case "multi_choice":
          if (!Array.isArray(userAnswer) || userAnswer.length === 0) {
            return new Response(
              JSON.stringify({question_id: question.id, error: `Respuesta inválida para la pregunta ${question.id}` }),
              { status: 400 }
            );
          }
          validAnswers[question.id] = userAnswer;
          break;
        case 'single_choice':
          if (typeof userAnswer !== 'string' || userAnswer.trim() === '') {
            return new Response(
              JSON.stringify({question_id: question.id, error: `Respuesta inválida para la pregunta ${question.id}` }),
              { status: 400 }
            );
          }
          validAnswers[question.id] = userAnswer;
          break;
        case 'text':
          if (typeof userAnswer !== 'string' || userAnswer.trim() === '') {
            return new Response(
              JSON.stringify({question_id: question.id, error: `Respuesta inválida para la pregunta ${question.id}` }),
              { status: 400 }
            );
          }
          validAnswers[question.id] = userAnswer;
          break;
        case "text_box":
          console.log("Validating text_box question", question.id, typeof userAnswer);

          if (typeof userAnswer !== "string" || userAnswer.trim() === "") {
            return new Response(
              JSON.stringify({question_id: question.id, error: `Respuesta inválida para la pregunta ${question.id}` }),
              { status: 400 }
            );
          }
          validAnswers[question.id] = userAnswer;
          break;
        case "number":
          // Check if userAnswer is a valid number
          if (typeof parseInt(userAnswer) !== "number" || isNaN(parseInt(userAnswer))) {
            return new Response(
              JSON.stringify({question_id: question.id, error: `Respuesta inválida para la pregunta ${question.id}` }),
              { status: 400 }
            );
          }
          validAnswers[question.id] = parseInt(userAnswer);
          break;
        case "ordered_list":
          if (!Array.isArray(userAnswer) || userAnswer.length === 0) {
            return new Response(
              JSON.stringify({question_id: question.id, error: `Respuesta inválida para la pregunta ${question.id}` }),
              { status: 400 }
            );
          }
          validAnswers[question.id] = userAnswer;
          break;
        case "percentages_sum_100":
          if (
            typeof userAnswer !== "object" ||
            Object.values(userAnswer).reduce((sum, value) => sum + (parseFloat(value) || 0), 0) !== 100
          ) {
            console.log(userAnswer);

            return new Response(
              JSON.stringify({question_id: question.id,error: `Respuesta inválida para la pregunta ${question.id}` }),
              { status: 400 }
            );
          }
          validAnswers[question.id] = userAnswer;
          break;
        default:
          return new Response(
            JSON.stringify({question_id: question.id, error: `Tipo de pregunta desconocido para pregunta ${question.id}` }),
            { status: 400 }
          );
      }
    }

    const saved = await prisma.response.create({
      data: { answers: validAnswers, encuestaId: 1 }, // Assuming encuestaId is always 1 for this example
    });
    return new Response(
      JSON.stringify({ success: true, message: "Encuesta enviada con éxito", id: saved.id }),
      { status: 200 }
    );
  } catch (err) {
    console.error("Error al guardar la encuesta:", err);
    return new Response(
      JSON.stringify({ error: "Error al guardar la encuesta en el servidor" }),
      { status: 500 }
    );
  }
}
