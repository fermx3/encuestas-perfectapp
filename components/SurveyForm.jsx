"use client";
import { useState, useEffect } from "react";
import Question from "./Question";

const SurveyForm = ({surveyId, preguntas}) => {
  const [answers, setAnswers] = useState({});
  const [errorQuestionId, setErrorQuestionId] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // Loader state

  const handleChange = (id, value) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
    if (errorQuestionId === id) setErrorQuestionId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorQuestionId(null);
    setLoading(true); // Start loader
    try {
      const res = await fetch("/api/submit-survey", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ surveyId, answers }),
      });
      if (res.ok) {
        alert("Gracias por tu respuesta!");
        setAnswers({});
        setError(null);
        setErrorQuestionId(null);
        window.scrollTo(0, 0);
        window.location.reload(true);
        console.log("Encuesta enviada con éxito", answers);
      } else {
        const errorData = await res.json();
        if (errorData.question_id) {
          setErrorQuestionId(errorData.question_id);
        }
        setError(errorData.error || "Ocurrió un error al enviar las respuestas.");
      }
    } finally {
      setLoading(false); // Stop loader
    }
  };

  const [showError, setShowError] = useState(true);

  useEffect(() => {
    if (error) setShowError(true);
  }, [error]);

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-xl space-y-6"
    >
      {preguntas.map((section) => (
        <div key={section.id} className="space-y-4 border-b pb-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-0">
            {section.title || "Sección sin título"}
          </h2>
          <p className="text-gray-600 text-sm mb-8">{section.description}</p>
          {section.questions.map((q, idx) => (
            <Question
              key={q.id}
              question={q}
              questionNumber={idx + 1}
              value={answers[q.id]}
              onChange={handleChange}
              hasError={errorQuestionId === q.id}
            />
          ))}
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
            className="ml-4 text-red-500 hover:text-red-700 font-bold text-xl"
            onClick={() => setShowError(false)}
            aria-label="Cerrar"
          >
            ×
          </button>
        </div>
      )}
    </form>
  );
};

export default SurveyForm;
