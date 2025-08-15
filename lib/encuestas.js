import { prisma } from "./prisma";

export const getAllEncuestas = async () => {
  const encuestas = await prisma.encuesta.findMany({
    orderBy: { createdAt: 'desc' },
  });
  return encuestas;
};

export const getEncuestaById = async (id) => {
  const encuesta = await prisma.encuesta.findUnique({
    where: { id: parseInt(id, 10) },
  });
  return encuesta;
}
