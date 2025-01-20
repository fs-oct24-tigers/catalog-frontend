import { Link } from 'react-router-dom';
import { useTheme } from './ThemeSwitcher/ThemeSwitcher';

export const Logo = () => {
  const { theme } = useTheme();

  return (
    <Link to="/">
      {theme === 'dark' ?
        <img className="px-6 h-8" src="/img/logo.png" alt="Dark Logo" />
      : <img
          className="px-6 h-8"
          src="/img/nice-gadgets-logo.svg"
          alt="Light Logo"
        />
      }
    </Link>
  );
};
