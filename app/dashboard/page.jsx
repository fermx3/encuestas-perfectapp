import { getDashboardData } from "@/lib/encuestas";

export default async function DashboardPage() {
  const encuestas = await getDashboardData();

  return (
    <main className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-blue-900 text-center">Dashboard de Encuestas</h1>
      <div className="flex flex-col gap-6 bg-blue-50 p-6 rounded-lg shadow-md">
        {encuestas.map((e) => (
          <div
            key={e.id}
            className="bg-white shadow rounded-lg border border-blue-100 p-6 flex flex-col gap-2"
          >
            <div className="flex items-center gap-2">
              <span className="font-bold text-blue-700 text-lg">#{e.id}</span>
              <span className="font-semibold text-xl">{e.title}</span>
            </div>
            <div className="flex flex-wrap gap-4 mt-2 text-sm">
              <div>
                <span className="font-semibold text-gray-700">Secciones: </span>
                {e.secciones}
              </div>
              <div>
                <span className="font-semibold text-gray-700">Preguntas: </span>
                {e.preguntas}
              </div>
              <div>
                <span className="font-semibold text-gray-700">Respuestas: </span>
                {e.respuestas}
              </div>
              <div>
                <span className="font-semibold text-gray-700">Última respuesta: </span>
                {e.ultimaRespuesta}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
