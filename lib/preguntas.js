import { prisma } from "./prisma";

export const getSurveyById = async (encuestaId) => {
// Get all sections with their questions for the given encuestaId
  const sections = await prisma.section.findMany({
    where: { encuestaId: parseInt(encuestaId, 10) },
    orderBy: { id: "asc" },
    include: {
      questions: {
        orderBy: { id: "asc" },
      },
    },
  });

  return sections;
};
