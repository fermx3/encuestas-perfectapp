import Image from "next/image";

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-black-500 to-black-600">
    <div className="w-full max-w-xl p-6 bg-white dark:shadow-md rounded-lg">
      <div className="flex justify-center mb-8 px-4">
        <Image
          src="/perfect-logo.png"
          alt="Logo de Perfectapp"
          width={200}
          height={200}
          className="rounded-full"
        />
      </div>
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Encuestas
      </h1>
      </div>
    </main>
  );
};

export default Home;
