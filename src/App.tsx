import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main';

export const App = () => {
  return (
    <div data-cy="app">
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </div>
  );
};
