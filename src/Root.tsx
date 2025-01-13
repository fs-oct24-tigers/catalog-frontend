import { Navigate, BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { App } from './App';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import FavoritesPage from './pages/FavoritesPage';
import ErrorBoundary from './components/ErrorBoundary';
import { NotFoundPage } from './components/NotFoundPage';

const categories = ['phones', 'tablets', 'accessories'];

const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          {categories.map((category) => (
            <Route key={category} path={category}>
              <Route
                index
                element={
                  <ErrorBoundary>
                    <ProductsPage category={category} />
                  </ErrorBoundary>
                }
              />
              <Route path=":id" element={<ProductPage />} />
            </Route>
          ))}

          <Route path="cart" element={<CartPage />} />
          <Route path="favourites" element={<FavoritesPage />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Root;
