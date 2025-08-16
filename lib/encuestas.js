import { prisma } from "./prisma";

export const getAllEncuestas = async () => {
  const encuestas = await prisma.encuesta.findMany({
    orderBy: { id: "asc" },
  });
  return encuestas;
};

export const getEncuestaById = async (id) => {
  const encuesta = await prisma.encuesta.findUnique({
    where: { id: parseInt(id, 10) },
  });
  return encuesta;
};

export const getDashboardData = async () => {
  const encuestas = await prisma.encuesta.findMany({
    include: {
      _count: {
        select: { responses: true, questions: true, sections: true },
      },
      responses: {
        orderBy: { createdAt: "desc" },
        take: 1,
        select: { createdAt: true },
      },
    },
    orderBy: { id: "asc" },
  });

  return encuestas.map((e) => ({
    id: e.id,
    title: e.title,
    respuestas: e._count.responses,
    preguntas: e._count.questions,
    secciones: e._count.sections,
    ultimaRespuesta: e.responses[0]?.createdAt
      ? new Date(e.responses[0].createdAt).toLocaleString("es-MX", {
          timeZone: "America/Mexico_City",
        })
      : "Sin respuestas",
  }));
};
