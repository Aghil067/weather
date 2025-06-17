import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] bg-[url('https://img.freepik.com/free-vector/dark-hexagonal-background-with-gradient-color_79603-1409.jpg?semt=ais_hybrid&w=740')] bg-cover bg-center text-white p-6">
      
      <h1 className="text-4xl font-bold mb-4 text-sky-400 drop-shadow-sm">
        Welcome to weather.io
      </h1>

      <p className="text-lg text-slate-200 mb-2">
        Your go-to source for accurate and up-to-date weather information.
      </p>
      
      <p className="text-slate-400 mb-6">
        Check the weather in your area or anywhere in the world.
      </p>

      <Link
        href="/weather"
        className="bg-sky-600 text-white px-6 py-3 rounded-lg hover:bg-sky-700 transition-colors shadow-lg"
      >
        Get Started
      </Link>
    </div>
  );
}
