import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Link to="/">
      <img className="px-6" src="/img/logo.png" alt="Logo" />
    </Link>
  );
};
