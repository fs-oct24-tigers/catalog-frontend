import React from 'react';
import logo from '@/../public/img/logo.svg';
import lightLogo from '@/../public/img/nice-gadgets-logo.svg';
import { Link } from 'react-router-dom';
import { ChevronUp } from 'lucide-react';
import '@/css/index.css';
import { useTheme } from '../ThemeSwitcher/ThemeSwitcher';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  const { theme } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`border-t dark:border-gray-700 py-8 px-4 md:flex md:justify-between md:items-center sm:px-4 md:px-8 lg:px-[32px] 2xl:px-[152px] ${className}`}
    >
      <Link to="/" className="md:ml-24">
        {theme === 'dark' ?
          <img className="h-8" src={logo} alt="Dark Logo" />
        : <img className="h-8 md:ml-24" src={lightLogo} alt="Light Logo" />}
      </Link>

      <div className="flex flex-col md:flex-row gap-[13px] lg:gap-[106px] mt-6 md:mt-0 sm:mt-8">
        <a
          href="https://github.com/fs-oct24-tigers/catalog-frontend"
          className="footer-link"
        >
          Github
        </a>
        <Link to="/contacts" className="footer-link">
          Contacts
        </Link>

        <Link to="/delivery" className="footer-link">
          Delivery
        </Link>
      </div>

      <div className="flex justify-center items-center gap-4 mt-6 md:mt-0 sm:mt-8">
        <p className="footer-text" onClick={scrollToTop}>
          Back to top
        </p>
        <button onClick={scrollToTop} className="footer-button">
          <ChevronUp className="w-4 h-4 text-slate-950 dark:text-textWhite" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
