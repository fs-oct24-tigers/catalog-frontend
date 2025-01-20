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

      {favoritesIsEmpty ?
        <>
          <div className="relative flex flex-col items-center justify-center">
            <div className="absolute w-full h-full">
              <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white rounded-full animate-float-slow opacity-50" />
              <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-white rounded-full animate-float-medium opacity-30" />
              <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-white rounded-full animate-float-fast opacity-40" />
              <div className="absolute top-1/5 left-1/2 w-2 h-2 bg-white rounded-full animate-float-fast opacity-80" />
            </div>
            <img
              src="/img/product-not-found.png"
              alt="Cart is empty"
              className="h-80 mb-8 animate-swing"
            />
            <h2 className="text-slate-950 dark:text-textWhite text-2xl font-bold">
              You don&apos;t have any favourite products
            </h2>
            <p className="text-slate-950 dark:text-textWhite text-lg mt-4">
              But it&apos;s never too late to fix it :)
            </p>
          </div>
        </>
      : <>
          <HeaderTitle mainText="Favourites" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10">
            {favoriteProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      }
    </div>
  );
};

export default FavoritesPage;
