import { Breadcrumbs } from '@/components/BreadCrumbs';
import { HeaderTitle } from '@/components/HeaderTitle/HeaderTitle';
import { useAppSelector } from '@/app/hooks';
import ProductCard from '../components/Product/ProductCard';

const FavoritesPage = () => {
  const favoriteProducts = useAppSelector((state) => state.favorites);

  return (
    <div className="container">
      <Breadcrumbs category="Favourites" />
      <HeaderTitle mainText="Favourites" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10">
        {favoriteProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
