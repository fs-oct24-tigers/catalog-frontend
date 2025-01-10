import { Link } from 'react-router-dom';
import phones from '../../public/api/phones.json';

const ProductsPage = () => {
  return (
    <>
      <div>
        <h1>Products Page</h1>
        <div>
          {phones.map((phone) => (
            <div key={phone.id}>
              <Link to={`${phone.id}`}>
                <h2>{phone.name}</h2>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
