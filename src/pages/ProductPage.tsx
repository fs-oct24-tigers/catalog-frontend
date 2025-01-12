import { useParams } from 'react-router-dom';
import phones from '../../public/api/phones.json';
import { ProductOptions } from '../components/ProductPage/ProductOptions';
import { ProductAbout } from '../components/ProductPage/ProductAbout';
import { NotFoundPage } from '@/components/NotFoundPage';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const product = phones.find((phone) => phone.id === id);

  if (!product) {
    return <NotFoundPage />;
  }

  const productVariants = phones.filter(
    (phone) => phone.namespaceId === product.namespaceId,
  );

  return (
    <div className="grid grid-cols-[560px_512px] grid-rows-2 gap-x-16 gap-y-20 mx-auto">
      <div></div>
      <div>
        <ProductOptions product={product} products={productVariants} />
      </div>
      <div>
        <ProductAbout />
      </div>
      <div></div>
    </div>
  );
};

export default ProductPage;
