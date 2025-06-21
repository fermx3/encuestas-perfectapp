import Image from "next/image";
import SurveyForm from "./SurveyForm";

const EncuestaPage = () => {
  return (
    <main className="min-h-screen bg-slate-100 py-12 px-4">
      <h1 className="text-3xl font-bold text-center text-slate-900">
        Encuesta Queso Imitación
      </h1>
      <p className="text-center text-lg text-slate-700 mb-6">
        Assessment
      </p>
      <div className="flex justify-center mb-8">
        <Image
          src="/perfect-icon.png"
          alt="Logo de Perfectapp"
          width={30}
          height={30}
          className="rounded-full"
        />
      </div>
      <SurveyForm />
    </main>
  )
}

export default EncuestaPage;
// This is the main page for the survey, which imports and renders the SurveyForm component.
