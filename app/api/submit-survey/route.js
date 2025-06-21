import { prisma } from "@/lib/prisma";
import { survey_questions } from "@/lib/preguntas";

export async function POST(req) {
  try {
    const submittedAnswers = await req.json();

    // Basic validation

    /* if (
      !submittedAnswers ||
      typeof submittedAnswers !== "object" ||
      Array.isArray(submittedAnswers)
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

    for (const question of survey_questions.flatMap((section) => section.questions)) {
      const userAnswer = submittedAnswers[question.id];

      if (userAnswer === undefined || userAnswer === null) {
        return new Response(
          JSON.stringify({ question_id: question.id, error: `Respuesta faltante para la pregunta ${question.id}` }),
          { status: 400 }
        );
      } // Check that are not empty answers

      switch (question.type) {
        case "multi-choice":
          if (!Array.isArray(userAnswer) || userAnswer.length === 0) {
            return new Response(
              JSON.stringify({question_id: question.id, error: `Respuesta inválida para la pregunta ${question.id}` }),
              { status: 400 }
            );
          }
          validAnswers[question.id] = userAnswer;
          break;
        case 'single-choice':
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
        case "ordered-list":
          if (!Array.isArray(userAnswer) || userAnswer.length === 0) {
            return new Response(
              JSON.stringify({question_id: question.id, error: `Respuesta inválida para la pregunta ${question.id}` }),
              { status: 400 }
            );
          }
          validAnswers[question.id] = userAnswer;
          break;
        case "percentages-sum-100":
          if (
            typeof userAnswer !== "object" ||
            Object.keys(userAnswer).length !== question.options.length ||
            Object.values(userAnswer).reduce((sum, value) => sum + (parseFloat(value) || 0), 0) !== 100
          ) {
            return new Response(
              JSON.stringify({question_id: question.id,error: `Respuesta inválida para la pregunta ${question.id}` }),
              { status: 400 }
            );
          }
          validAnswers[question.id] = userAnswer;
          break;
        default:
          return new Response(
            JSON.stringify({question_id: question.id, error: `Tipo de pregunta desconocido para ${question.id}` }),
            { status: 400 }
          );
      }
    }

    const saved = await prisma.response.create({
      data: { answers: validAnswers },
    });
    return new Response(
      JSON.stringify({ success: true, message: "Encuesta enviada con éxito", id: saved.id }),
      { status: 200 }
    ); */

    const saved = await prisma.response.create({
      data: { answers: submittedAnswers },
    });
    console.log("Encuesta guardada con éxito:", saved);

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
