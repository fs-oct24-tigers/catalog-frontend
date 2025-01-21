import { Navigate, BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { App } from './App';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import FavoritesPage from './pages/FavoritesPage';
import ErrorBoundary from './components/ErrorBoundary';
import { NotFoundPage } from './components/NotFoundPage/NotFoundPage';
import ScrollToTop from './components/ScrollToTop';
import ContactsPage from './pages/ContactsPage';
import { Delivery } from './pages/Delivery';
import useCategories from './hooks/useCategories';

const Root = () => {
  const { categories } = useCategories();

  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />

            {categories?.map((category) => (
              <Route key={category} path={category}>
                <Route
                  index
                  element={
                    <ErrorBoundary>
                      <ProductsPage category={category} />
                    </ErrorBoundary>
                  }
                />
                <Route
                  path=":id"
                  element={
                    <ErrorBoundary>
                      <ProductPage category={category} />
                    </ErrorBoundary>
                  }
                />
              </Route>
            ))}

            <Route path="favourites" element={<FavoritesPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="home" element={<Navigate to="/" replace />} />
            <Route path="contacts" element={<ContactsPage />} />
            <Route path="delivery" element={<Delivery />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
    </ErrorBoundary>
  );
};

export default Root;
