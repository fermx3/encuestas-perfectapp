import { getEncuestaById } from "@/lib/encuestas";
import { notFound } from "next/navigation";

export const generateMetadata = async (context) => {
  const params = await context.params;
  const encuestaId = parseInt(params.id);
  if (isNaN(encuestaId)) return {};

  const encuesta = await getEncuestaById(encuestaId);

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
};

export default function EncuestaLayout({ children }) {
  return <>{children}</>;
}
