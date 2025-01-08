import { Navigate, BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { App } from './App';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';

const Root = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<App />}
        >
          <Route
            index
            element={<HomePage />}
          />
          <Route
            path="products"
            element={<ProductsPage />}
          ></Route>
          {/* <Route path="product/:slug?">
            <Route
              index
              element={<ProductsPage />}
            />
          </Route> */}
          <Route
            path="*"
            element={<h1 className="title">Page not found</h1>}
          />
          <Route
            path="home"
            element={
              <Navigate
                to="/"
                replace={true}
              />
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default Root;
