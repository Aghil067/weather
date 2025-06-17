import React from 'react';
import Link from 'next/link';
import { CloudSun } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="backdrop-blur-md bg-white/5 border-b border-sky-500/30 shadow-md shadow-sky-900/20 px-8 py-4 flex justify-between items-center fixed w-full z-50">
      <div className="flex items-center gap-2">
        <span className="text-sky-400 text-2xl animate-pulse">🌩️</span>
        <Link href="/" className="text-2xl font-bold text-sky-400 hover:text-sky-300 transition duration-300">
          weather.io
        </Link>
      </div>

      <div className="space-x-8 text-sm font-medium text-slate-200">
        <Link href="/" className="hover:text-sky-400 transition duration-300">Home</Link>
        <Link href="/about" className="hover:text-sky-400 transition duration-300">About</Link>
        <Link href="/contact" className="hover:text-sky-400 transition duration-300">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;

