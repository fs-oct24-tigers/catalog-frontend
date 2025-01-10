import { useParams } from 'react-router-dom';
import phones from '../../public/api/phones.json';

const ProductPage = () => {
  const { id } = useParams();
  console.log(id);

  const product = phones.find((phone) => phone.id === id);

  return (
    <div>
      <h1>{product?.name}</h1>
      <p>Price: ${product?.priceRegular}</p>
    </div>
  );
};

export default ProductPage;
