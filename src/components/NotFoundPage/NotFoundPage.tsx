/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '/img/page-not-found.png';

export const NotFoundPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-[60vh] mt-4 lg:mt-20 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-slate-300 dark:bg-white rounded-full animate-float-slow opacity-50" />
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-slate-300 dark:bg-white rounded-full animate-float-medium opacity-30" />
        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-slate-300 dark:bg-white rounded-full animate-float-fast opacity-40" />
        <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-slate-300 dark:bg-white rounded-full animate-float-medium opacity-30" />
      </div>

      <div
        className={`relative ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
      >
        <div className="flex items-center justify-center gap-4 mb-8 flex-wrap">
          <span className="text-[100px] md:text-[150px] lg:text-[200px] font-bold text-gray-800">
            4
          </span>
          <div className="relative w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64">
            <Link to="/">
              <img
                src={logo}
                alt="404 Character"
                className="w-full h-full object-contain animate-swing"
              />
            </Link>
          </div>
          <span className="text-[100px] md:text-[150px] lg:text-[200px] font-bold text-gray-800">
            4
          </span>
        </div>

        <div className="text-center">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-950 dark:text-white mb-4">
            Oops! Page not found
          </h2>
          <p className="text-gray-400 mb-8 text-sm md:text-base">
            The page you're looking for doesn't exist or may have been moved.
            <br /> No worries—you can always head back to our homepage and start
            over. Just a click away!
          </p>
          <Link
            to="/"
            className="inline-block px-6 py-3 text-black bg-white rounded-lg hover:bg-gray-100 transition-colors mb-4"
          >
            Go Back Home
          </Link>
          <p className="text-sm text-zinc-500">
            Error 404: The page you're looking for doesn't exist
          </p>
        </div>
      </div>
    </div>
  );
};
