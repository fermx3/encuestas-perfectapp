import { prisma } from "@/lib/prisma";

const getDashboardData = async () => {
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
      ? new Date(e.responses[0].createdAt).toLocaleString()
      : "Sin respuestas",
  }));
};

export default async function DashboardPage() {
  const encuestas = await getDashboardData();

  return (
    <main className="max-w-3xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8 text-blue-900">Dashboard de Encuestas</h1>
      <table className="w-full border-collapse bg-white shadow rounded">
        <thead>
          <tr className="bg-blue-100">
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Título</th>
            <th className="p-2 border">Secciones</th>
            <th className="p-2 border">Preguntas</th>
            <th className="p-2 border">Respuestas</th>
            <th className="p-2 border">Última respuesta</th>
          </tr>
        </thead>
        <tbody>
          {encuestas.map((e) => (
            <tr key={e.id} className="text-center">
              <td className="border p-2">{e.id}</td>
              <td className="border p-2">{e.title}</td>
              <td className="border p-2">{e.secciones}</td>
              <td className="border p-2">{e.preguntas}</td>
              <td className="border p-2">{e.respuestas}</td>
              <td className="border p-2">{e.ultimaRespuesta}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
