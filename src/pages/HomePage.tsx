import BannerSwiper from '@/components/BannerSwiper/BannerSwiper';
import { Categories } from '@/components/product/Categories';
import PhonesSlider from '@/components/PhonesSlider/PhonesSlider';
import { TitlePageProps } from '@/types';

const HomePage: React.FC<TitlePageProps> = ({ title }) => {
  return (
    <div className="container">
      <h1 className="text-[22px] sm:text-[32px] font-extrabold text-textWhite mb-6 mt-6">
        Welcome to Nice <span className="block sm:inline">{title}</span>
      </h1>
      <BannerSwiper />
      <PhonesSlider
        title="Brand new models"
        apiEndpoint="/api/accessories.json"
        filterType="newModels"
      />
      <Categories />
      <PhonesSlider
        title="Hot prices"
        apiEndpoint="/api/phones.json"
        filterType="hotPrices"
      />
    </div>
  );
};

export default HomePage;
