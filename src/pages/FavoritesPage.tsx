import { Breadcrumbs } from '@/components/BreadCrumbs';
import { HeaderTitle } from '@/components/HeaderTitle/HeaderTitle';
import { useAppSelector } from '@/app/hooks';
import ProductCard from '../components/product/ProductCard';

const FavoritesPage = () => {
  const favoriteProducts = useAppSelector((state) => state.favorites);

  return (
    <div className="flex items-center justify-center min-h-screen bg-bodyBg">
      <div className="container mx-auto p-2">
        <Breadcrumbs category="Favourites" />
        <HeaderTitle mainText="Favourites" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10">
          {favoriteProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavoritesPage;
