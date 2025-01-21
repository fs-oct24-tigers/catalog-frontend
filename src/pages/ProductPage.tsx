import { ProductOptions } from '../components/ProductPage/ProductOptions';
import { ProductAbout } from '../components/ProductPage/ProductAbout';
import { NotFoundPage } from '@/components/NotFoundPage/NotFoundPage';
import { PageGallery } from '../components/ProductPage/PageGallery';
import { ProductTable } from '@/components/ProductPage/ProductTable';
import { Breadcrumbs } from '@/components/BreadCrumbs';
import { getSpecs, getProperties } from '@/constants';
import { HeaderTitle } from '@/components/HeaderTitle/HeaderTitle';
import { BackButton } from '@/components/BackButton/BackButton';

import ProductsSlider from '@/components/Sliders/ProductsSlider';
import useSingleProduct from '@/hooks/useSingleProduct';

type Props = {
  category: string;
};

const ProductPage: React.FC<Props> = ({ category }) => {
  const { product, isLoading, isError } = useSingleProduct();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching products</div>;
  }

  if (!product) {
    return <NotFoundPage />;
  }

  const description = product.description || [];
  const specs = getSpecs(product);
  const properties = getProperties(product);

  return (
    <div className="flex flex-col gap-y-16 mx-auto">
      <div>
        <Breadcrumbs category={product.category} productName={product.name} />
        <BackButton />
        <HeaderTitle mainText={product.name} className="text-h3 sm:text-h2" />
      </div>
      <div className="flex flex-col sm:flex-row lg:gap-x-16 gap-y-16 justify-center ">
        <div className="w-full lg:w-[560px] md:w-[592px] sm:w-[287px]">
          <PageGallery images={product.images} />
        </div>
        <div className="w-full sm:w-[287px] md:w-[592px] lg:w-[512px] justify-center items-center">
          <ProductOptions
            category={category}
            product={product}
            properties={properties}
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:gap-x-16 mt-16">
        <div className="w-full sm:w-[287px] md:w-[592px] lg:w-[560px]">
          <ProductAbout description={description} />
        </div>
        <div className="w-full sm:w-[287px] md;w-[592px] lg:w-[512px]">
          <ProductTable specs={specs} />
        </div>
      </div>
      <div>
        <ProductsSlider
          title="You may also like"
          category="phones"
          filterType="hotPrices"
        />
      </div>
    </div>
  );
};

export default ProductPage;
