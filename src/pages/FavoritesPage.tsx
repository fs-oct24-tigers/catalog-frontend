import { Breadcrumbs } from '@/components/BreadCrumbs';
import { TitlePageProps } from '@/types';

const FavoritesPage: React.FC<TitlePageProps> = ({ title }) => {
  return (
    <div className="container">
      <Breadcrumbs category="Favourites" />
      <h1 className="text-[22px] sm:text-[32px] font-extrabold text-textWhite mb-6 mt-6">
        {title}
      </h1>
    </div>
  );
};

export default FavoritesPage;
