import { useParams } from 'react-router-dom';
import phones from '../../public/api/phones.json';
import { ProductOptions } from '../components/ProductPage/ProductOptions';
import { ProductAbout } from '../components/ProductPage/ProductAbout';
import { NotFoundPage } from '@/components/NotFoundPage';
import { PageGallery } from '../components/ProductPage/PageGallery';
import { ProductTable } from '@/components/ProductPage/ProductTable';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const product = phones.find((phone) => phone.id === id);

  if (!product) {
    return <NotFoundPage />;
  }

  const productVariants = phones.filter(
    (phone) => phone.namespaceId === product.namespaceId,
  );

  const properties = [
    { name: 'Screen', value: product.screen },
    { name: 'Resolution', value: product.resolution },
    { name: 'Processor', value: product.processor },
    { name: 'RAM', value: product.ram },
    { name: 'Camera', value: product.camera },
    { name: 'Zoom', value: product.zoom },
    { name: 'Cell', value: product.cell.join(', ') },
  ];

  return (
    <div className="flex flex-col gap-y-16 mx-auto">
      <div className="flex gap-x-16">
        <div className="w-[560px]">
          <PageGallery images={product.images} />
        </div>
        <div className="w-[512px]">
          <ProductOptions product={product} products={productVariants} />
        </div>
      </div>
      <div className="flex gap-x-16 mt-16">
        <div className="w-[560px]">
          <ProductAbout />
        </div>
        <div className="w-[512px]">
          <ProductTable properties={properties} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
