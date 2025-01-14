import BannerSwiper from '@/components/BannerSwiper/BannerSwiper';
import { Categories } from '@/components/product/Categories';
import PhonesSlider from '@/components/PhonesSlider/PhonesSlider';
import { HeaderTitle } from '@/components/HeaderTitle/HeaderTitle';

const HomePage = () => {
  return (
    <div className="container">
      <HeaderTitle
        mainText="Welcome to Nice"
        additionalText="Gadgets store!"
        isAdditionalTextBlock={true}
      />
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
