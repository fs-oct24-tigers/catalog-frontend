import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Link to="/">
      <img className="px-6 h-8" src="/img/logo.png" alt="Logo" />
    </Link>
  );
};
