"use client";
import React, { useState } from "react";
import { survey_questions } from "@/lib/preguntas";
import Question from "./Question";

const SurveyForm = () => {
  const [answers, setAnswers] = useState({});

  const handleChange = (id, value) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Respuestas enviadas:", answers);
    /* const res = await fetch("/api/submit-survey", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(answers),
    });
    if (res.ok) {
      alert("Gracias por tu respuesta!");
    } else {
      alert("Error al enviar la encuesta. Inténtalo de nuevo.");
    } */
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-xl space-y-6"
    >
      {survey_questions.map((section) => (
        <div key={section.id} className="space-y-4 border-b pb-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            {section.section}
          </h2>
          {section.questions.map((q) => (
            <Question
              key={q.id}
              question={q}
              value={answers[q.id]}
              onChange={handleChange}
            />
          ))}
        </div>
      ))}
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-2 rounded-full transition duration-200"
        >
          Enviar respuestas
        </button>
      </div>
    </form>
  );
};

export default SurveyForm;
// This code defines a SurveyForm component that renders a survey form based on predefined questions.
