import Image from "next/image";
import SurveyForm from "@/components/SurveyForm";
import { getEncuestaById } from "@/lib/encuestas";
import { getSurveyById } from "@/lib/preguntas";
import Link from "next/link";

const EncuestaPage = async ({ params }) => {
  const { id } = await params; // Extract the survey ID from the URL parameters
  const encuesta = await getEncuestaById(id); // Fetch survey details
  const preguntas = await getSurveyById(id); // Fetch questions for the survey

  if (!encuesta) {
    return (
      <main
        className="min-h-screen bg-slate-100 py-12 px-4 flex flex-col items-center justify-center
      "
      >
        <div className="flex justify-center mb-8">
          <Image
            src="/perfect-icon.png"
            alt="Logo de Perfectapp"
            width={30}
            height={30}
            className="rounded-full"
          />
        </div>
        <h1 className="text-3xl font-bold text-red-600">
          Encuesta no encontrada
        </h1>
        <p className="text-center text-lg text-slate-700 mt-4">
          La encuesta con ID {id} no existe. Por favor, verifica el enlace o
          regresa a la página principal.
        </p>
        <Link href="/" className="mt-6 text-blue-600 underline">
          Volver a la página principal
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100 py-12 px-4">
      <h1 className="text-3xl font-bold text-center text-slate-900">
        {encuesta.title} - ID: {encuesta.id}
      </h1>
      <p className="text-center text-lg text-slate-700 mb-6">
        Assessment for {encuesta.title}
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
      <SurveyForm surveyId={id} preguntas={preguntas} />
    </main>
  );
};

export default EncuestaPage;
