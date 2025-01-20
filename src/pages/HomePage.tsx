import BannerSwiper from '@/components/Sliders/BannerSwiper';
import { Categories } from '@/components/product/Categories';
import { HeaderTitle } from '@/components/HeaderTitle/HeaderTitle';
import ProductsSlider from '@/components/Sliders/ProductsSlider';

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
      <ProductsSlider
        title="Brand new models"
        category="accessories"
        filterType="newModels"
      />
      <Categories />
      <ProductsSlider
        title="Hot prices"
        category="phones"
        filterType="hotPrices"
      />
    </div>
  );
};

export default HomePage;
