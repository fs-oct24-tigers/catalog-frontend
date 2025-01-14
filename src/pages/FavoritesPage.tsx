import { Breadcrumbs } from '@/components/BreadCrumbs';
import { HeaderTitle } from '@/components/HeaderTitle/HeaderTitle';

const FavoritesPage = () => {
  return (
    <div className="container">
      <Breadcrumbs category="Favourites" />
      <HeaderTitle mainText="Favourites" />
    </div>
  );
};

export default FavoritesPage;
