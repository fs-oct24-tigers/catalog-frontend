import { Link } from 'react-router-dom';
import { useTheme } from './ThemeSwitcher/ThemeSwitcher';

type Props = {
  handleCloseMenu: () => void;
};

export const Logo: React.FC<Props> = ({ handleCloseMenu }) => {
  const { theme } = useTheme();

  return (
    <Link to="/" onClick={handleCloseMenu}>
      {theme === 'dark' ?
        <img className="pl-6 h-8" src="/img/logo.svg" alt="Dark Logo" />
      : <img
          className="pl-6 h-8"
          src="/img/nice-gadgets-logo.svg"
          alt="Light Logo"
        />
      }
    </Link>
  );
};
