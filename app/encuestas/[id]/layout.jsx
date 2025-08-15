import { getEncuestaById } from "@/lib/encuestas";
import { notFound } from "next/navigation";

export const generateMetadata = async ({ params }) => {
  const encuestaId = Number(params.id);
  if (isNaN(encuestaId)) return {};

  const encuesta = await getEncuestaById(encuestaId);

  console.log(encuesta);


  if (!encuesta) return notFound();

  return {
    title: encuesta.title || "Encuesta",
    description: encuesta.description || "Participa en nuestra encuesta.",
    openGraph: {
      title: encuesta.title || "Encuesta",
      description: encuesta.description || "Participa en nuestra encuesta.",
    },
    twitter: {
      title: encuesta.title || "Encuesta",
      description: encuesta.description || "Participa en nuestra encuesta.",
    },
  };
}

export default function EncuestaLayout({ children }) {
  return <>{children}</>;
}
