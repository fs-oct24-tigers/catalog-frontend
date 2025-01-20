import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from './components/ThemeSwitcher/ThemeSwitcher';

export const App = () => {
  return (
    <ThemeProvider>
      <div
        data-cy="app"
        className="min-h-screen bg-light-bodyBg dark:bg-bodyBg text-light-textPrimary dark:text-textWhite"
      >
        <Header />
        <Main>
          <Outlet />
        </Main>
        <Footer className="sticky top-[100vh]" />
        <ToastContainer />
      </div>
    </ThemeProvider>
  );
};
