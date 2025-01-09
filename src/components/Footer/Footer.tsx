import React from 'react';
import logo from '@/assets/logo.png';
import { Link } from 'react-router-dom';
import { ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-32 border-t border-gray-700 py-8 px-4 md:flex md:justify-between md:items-center sm:px-4 md:px-8 lg:px-[32px] 2xl:px-[152px]">
      {/* Лого */}
      <Link
        to="/"
        className="md:ml-24"
      >
        <img
          src={logo}
          alt="logo"
          className="h-8"
        />
      </Link>

      {/* Посилання */}
      <div className="flex flex-col md:flex-row gap-[13.5px] lg:gap-[106.83px] mt-6 md:mt-0 sm:mt-8">
        <a
          href="#"
          className="text-xs font-extrabold uppercase tracking-wider text-white hover:text-gray-400"
        >
          Github
        </a>
        <a
          href="#"
          className="text-xs font-extrabold uppercase tracking-wider text-white hover:text-gray-400"
        >
          Contacts
        </a>
        <a
          href="#"
          className="text-xs font-extrabold uppercase tracking-wider text-white hover:text-gray-400"
        >
          Rights
        </a>
      </div>

      {/* Кнопка "Back to top" */}
      <div className="flex justify-center items-center gap-4 mt-6 md:mt-0 sm:mt-8">
        <p
          className="text-xs font-bold text-gray-500 cursor-pointer whitespace-nowrap hover:text-gray-400"
          onClick={scrollToTop}
        >
          Back to top
        </p>
        <button
          onClick={scrollToTop}
          className="w-8 h-8 flex items-center justify-center bg-gray-800 text-white hover:bg-gray-700 transition-colors"
        >
          <ChevronUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
