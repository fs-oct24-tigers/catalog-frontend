import { Categories } from '@/components/product/Categories';
import ProductCard from '@/components/product/ProductCard';

const HomePage = () => {
  return (
    <div className="container">
      <h1 className="title">Home Page</h1>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <Categories />
    </div>
  );
};

export default HomePage;
