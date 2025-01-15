import { Breadcrumbs } from '@/components/BreadCrumbs';
import { HeaderTitle } from '@/components/HeaderTitle/HeaderTitle';
import { useAppSelector } from '@/app/hooks';
import ProductCard from '../components/product/ProductCard';

const FavoritesPage = () => {
  const favoriteProducts = useAppSelector((state) => state.favorites);
  const favoritesIsEmpty = favoriteProducts.length === 0;

  return (
    <div className="container">
      <Breadcrumbs category="Favourites" />
      <HeaderTitle mainText="Favourites" />
      {favoritesIsEmpty ?
        <>
          <div className="flex flex-col items-center justify-center">
            <img
              src="public\img\product-not-found.png"
              alt="Cart is empty"
              className="h-80 mb-8"
            />
            <h2 className="text-2xl font-bold">
              You don&apos;t have any favourite products
            </h2>
            <p className="text-lg mt-4">
              But it&apos;s never too late to fix it :)
            </p>
          </div>
        </>
      : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10">
          {favoriteProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      }
    </div>
  );
};

export default FavoritesPage;
