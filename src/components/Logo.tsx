import { Link } from 'react-router-dom';

type Props = {
  handleCloseMenu: () => void;
};

export const Logo: React.FC<Props> = ({ handleCloseMenu }) => {
  return (
    <Link to="/" onClick={handleCloseMenu}>
      <img className="px-6 h-8" src="/img/logo.png" alt="Logo" />
    </Link>
  );
};
