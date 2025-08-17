"use client";
import { useState, useEffect, useRef } from "react";
import Question from "./Question";
import ProgressBar from "./ui/progress-bar";

const allowedNegocios = [
  "TIENDA DE ABARROTES",
  "RECAUDERIA",
  "CREMERIA",
  "MATERIAS PRIMAS",
];

const SurveyForm = ({ surveyId, preguntas }) => {
  const [answers, setAnswers] = useState({});
  const [errorQuestionId, setErrorQuestionId] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // Loader state
  const questionRefs = useRef({});

  // Obtener respuesta de la pregunta 107
  const negocio = answers[107];

  // Filtrar las secciones según la lógica
  const visibleSections = preguntas.filter((section) => {
    // Si es la sección 6, solo mostrar si negocio está en las opciones permitidas
    if (section.id === 6) {
      if (!negocio) return false; // Si no hay respuesta, no mostrar sección
      return allowedNegocios.includes(negocio);
    }
    // Si es la sección 7, mostrar solo si negocio no está en las opciones permitidas
    if (section.id === 7) {
      if (!negocio) return false; // Si no hay respuesta, mostrar sección
      return !allowedNegocios.includes(negocio);
    }
    return true; // Otras secciones siempre se muestran
  });

  const handleChange = (id, value) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
    if (errorQuestionId === id) setErrorQuestionId(null);
    setError(null);
  };

  // Calcular el número de pregunta global
  let surveyQuestionNumber = 1;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorQuestionId(null);
    setLoading(true); // Start loader

    // Filtrar respuestas para incluir solo las preguntas visibles
    const visibleQuestionIds = visibleSections.flatMap((section) =>
      section.questions.map((q) => q.id)
    );
    const filteredAnswers = Object.fromEntries(
      Object.entries(answers).filter(([id]) =>
        visibleQuestionIds.includes(Number(id))
      )
    );

    try {
      const res = await fetch("/api/submit-survey", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ surveyId, answers: filteredAnswers }),
      });
      if (res.ok) {
        alert("Gracias por tu respuesta!");
        setAnswers({});
        setError(null);
        setErrorQuestionId(null);
        window.scrollTo(0, 0);
        window.location.reload(true);
      } else {
        const errorData = await res.json();
        if (errorData.question_id) {
          setErrorQuestionId(errorData.question_id);
        }
        setError(
          errorData.error || "Ocurrió un error al enviar las respuestas."
        );
      }
    } finally {
      setLoading(false); // Stop loader
    }
  };

  const [showError, setShowError] = useState(true);

  useEffect(() => {
    if (error) setShowError(true);
  }, [error]);

  const totalQuestions = visibleSections.flatMap((s) => s.questions).length;
  const answeredQuestions = Object.keys(answers).length;

  return (
    <>
    <ProgressBar total={totalQuestions} answered={answeredQuestions} />
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-xl space-y-6"
      >
        {visibleSections.map((section) => (
          <div key={section.id} className="space-y-4 border-b pb-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-0">
              {section.title || "Sección sin título"}
            </h2>
            <p className="text-gray-600 text-sm mb-8">{section.description}</p>
            {section.questions.map((q) => {
              const questionNumber = surveyQuestionNumber;
              surveyQuestionNumber += 1;
              return (
                <Question
                  key={q.id}
                  question={q}
                  questionNumber={questionNumber}
                  value={answers[q.id]}
                  onChange={handleChange}
                  hasError={errorQuestionId === q.id}
                  ref={(el) => (questionRefs.current[q.id] = el)}
                />
              );
            })}
          </div>
        ))}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-2 rounded-full transition duration-200"
            disabled={loading}
          >
            {loading ? "Enviando..." : "Enviar respuestas"}
          </button>
        </div>
        {loading && (
          <div className="flex justify-center mt-4">
            <span className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-blue-500"></span>
            <span className="ml-2 text-blue-600">Enviando respuestas...</span>
          </div>
        )}
        {error && showError && (
          <div className="mt-4 p-4 bg-red-100 text-red-800 border border-red-300 rounded shadow fixed bottom-4 left-1/2 transform -translate-x-1/2 w-96 flex items-center justify-between">
            <span>{error}</span>
            <button
              type="button"
              className="text-blue-500 hover:text-blue-700 font-bold"
              onClick={() => {
                if (errorQuestionId && questionRefs.current[errorQuestionId]) {
                  questionRefs.current[errorQuestionId].scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
              aria-label="Cerrar"
            >
              Ir a la pregunta
            </button>
            <button
              type="button"
              className="ml-4 text-red-500 hover:text-red-700 font-bold text-xl"
              onClick={() => setShowError(false)}
              aria-label="Cerrar"
            >
              ×
            </button>
          </div>
        )}
      </form>
    </>
  );
};

export default SurveyForm;
