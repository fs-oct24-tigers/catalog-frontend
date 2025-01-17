import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <div data-cy="app">
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer className="mt-auto" />
      <ToastContainer />
    </div>
  );
};
