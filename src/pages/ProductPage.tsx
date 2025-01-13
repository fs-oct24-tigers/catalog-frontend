import { useParams } from 'react-router-dom';
import phones from '../../public/api/phones.json';
import { ProductOptions } from '../components/ProductPage/ProductOptions';
import { NotFoundPage } from '@/components/NotFoundPage';
import { PageGallery } from '../components/ProductPage/PageGallery';

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
    <div>
      <PageGallery images={product.images} />
      <ProductOptions product={product} products={productVariants} />
    </div>
  );
};

export default ProductPage;
