import BannerSwiper from '@/components/BannerSwiper/BannerSwiper';
import { Categories } from '@/components/product/Categories';
import PhonesSlider from '@/components/PhonesSlider/PhonesSlider';

const HomePage = () => {
  return (
    <div className="container">
      <h1 className="text-[22px] sm:text-[32px] font-extrabold text-textWhite mb-6 mt-6">
        Welcome to Nice <span className="block sm:inline">Gadgets store!</span>
      </h1>
      <BannerSwiper />
      <PhonesSlider title="Brand new models" filter="new" />
      <Categories />
      <PhonesSlider title="Hot prices" filter="hot" />
    </div>
  );
};

export default HomePage;
