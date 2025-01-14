import React from 'react';
import logo from '@/assets/logo.png';
import { Link } from 'react-router-dom';
import { ChevronUp } from 'lucide-react';
import '@/css/index.css';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-32 border-t border-gray-700 py-8 px-4 md:flex md:justify-between md:items-center sm:px-4 md:px-8 lg:px-[32px] 2xl:px-[152px]">
      <Link to="/" className="md:ml-24">
        <img src={logo} alt="logo" className="h-8" />
      </Link>

      <div className="flex flex-col md:flex-row gap-[13px] lg:gap-[106px] mt-6 md:mt-0 sm:mt-8">
        <a href="#" className="footer-link">
          Github
        </a>
        <a href="#" className="footer-link">
          Contacts
        </a>
        <a href="#" className="footer-link">
          Rights
        </a>
      </div>

      <div className="flex justify-center items-center gap-4 mt-6 md:mt-0 sm:mt-8">
        <p className="footer-text" onClick={scrollToTop}>
          Back to top
        </p>
        <button onClick={scrollToTop} className="footer-button">
          <ChevronUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
