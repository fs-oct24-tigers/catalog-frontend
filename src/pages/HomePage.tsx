import BannerSwiper from '@/components/Sliders/BannerSwiper';
import { Categories } from '@/components/product/Categories';
import PhonesSlider from '@/components/Sliders/ProductsSlider';
import { HeaderTitle } from '@/components/HeaderTitle/HeaderTitle';

const HomePage = () => {
  return (
    <div className="container">
      <HeaderTitle
        mainText="Welcome to Nice"
        additionalText="Gadgets store!"
        isAdditionalTextBlock={true}
        isHomePage={true}
      />
      <BannerSwiper />
      <PhonesSlider
        title="Brand new models"
        apiEndpoint="/api/accessories.json"
        filterType="hotPrices"
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
