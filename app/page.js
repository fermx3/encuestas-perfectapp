import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen" style={{ background: "linear-gradient(to bottom right, #1e3a8a, #60a5fa, #bfdbfe)" }}>
      <div className="w-full max-w-lg p-8 bg-white shadow-lg rounded-xl border border-yellow-300">
        <div className="flex justify-center mb-6">
          <Image
            src="/perfect-logo.png"
            alt="Logo de Perfectapp"
            width={120}
            height={120}
            className="rounded-full"
          />
        </div>
        <h1 className="text-4xl font-extrabold text-center text-blue-800 mb-4 font-sans tracking-tight">
          Encuestas
        </h1>
        <p className="text-center text-blue-700 mb-2 font-medium">
          Micrositio de encuestas para la evaluación de productos
        </p>
      </div>
      <div className="w-full max-w-lg mt-8 p-6 bg-white shadow-md rounded-lg border border-blue-200">
        <ul className="space-y-3">
            <Link href="/encuesta" className="text-blue-800 font-semibold">
          <li className="p-4 bg-blue-50 rounded hover:bg-blue-100 transition">
              Evaluación de Queso Imitación
          </li>
            </Link>
        </ul>
        </div>
    </main>
  );
};

export default Home;
