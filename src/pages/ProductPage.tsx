import { useParams } from 'react-router-dom';
import { ProductOptions } from '../components/ProductPage/ProductOptions';
import { ProductAbout } from '../components/ProductPage/ProductAbout';
import { NotFoundPage } from '@/components/NotFoundPage';
import { PageGallery } from '../components/ProductPage/PageGallery';
import { ProductTable } from '@/components/ProductPage/ProductTable';
import { Breadcrumbs } from '@/components/BreadCrumbs';
import { useQuery } from '@tanstack/react-query';
import { Product } from '@/types';
import { get } from '@/api/fetchProducts';
import PhonesSlider from '@/components/PhonesSlider/PhonesSlider';

import { HeaderTitle } from '@/components/HeaderTitle/HeaderTitle';
import { BackButton } from '@/components/BackButton/BackButton';

type Props = {
  category: string;
};

const ProductPage: React.FC<Props> = ({ category }) => {
  const { id } = useParams<{ id: string }>();

  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery<Product[]>({
    queryKey: [category],
    queryFn: () => get(`/api/${category}.json`),
  });

  const product = products?.find((product) => product.id === id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching products: {error.message}</div>;
  }

  if (!product) {
    return <NotFoundPage />;
  }

  const productVariants = products?.filter(
    (product) => product.namespaceId === product.namespaceId,
  );

  const specs = [
    { name: 'Screen', value: product.screen },
    { name: 'Resolution', value: product.resolution },
    { name: 'Processor', value: product.processor },
    { name: 'RAM', value: product.ram },
    { name: 'Camera', value: product.camera },
    { name: 'Zoom', value: product.zoom },
    { name: 'Cell', value: product.cell?.join(', ') },
  ];

  const properties = [
    { name: 'Screen', value: product.screen },
    { name: 'Resolution', value: product.resolution },
    { name: 'Processor', value: product.processor },
    { name: 'RAM', value: product.ram },
  ];

  const description = product.description || [];

  return (
    <div className="flex flex-col gap-y-16 mx-auto">
      <div>
        <BackButton />
        <Breadcrumbs category={product.category} productName={product.name} />
        <HeaderTitle mainText={product.name} className="text-h3 sm:text-h2" />
      </div>
      <div className="flex flaex-col lg:flex-row lg:gap-x-16 gap-y-16">
        <div className="w-full lg:w-[560px] md:w-[592px] sm:w-[287px]">
          <PageGallery images={product.images} />
        </div>
        <div className="w-full sm:w-[287px] md:w-[592px] lg:w-[512px]">
          <ProductOptions
            category={category}
            product={product}
            products={productVariants || []}
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
        <PhonesSlider
          title="You may also like"
          apiEndpoint="/api/phones.json"
        />
      </div>
    </div>
  );
};

export default ProductPage;
