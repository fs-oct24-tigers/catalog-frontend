import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProductsPage: FC = () => {
  interface Phone {
    id: number;
    name: string;
  }

  const [phones, setPhones] = useState<Phone[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get('../../public/api/phones.json')
      .then((response) => {
        setPhones(response.data);
      })
      .catch((err) => {
        console.error('Error fetching the data:', err);
        setError('Failed to load data');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Products Page</h1>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {!isLoading && !error && phones.length > 0 && (
        <div>
          {phones.map((phone) => (
            <div key={phone.id}>
              <Link to={`${phone.id}`}>
                <h2>{phone.name}</h2>
              </Link>
            </div>
          ))}
        </div>
      )}
      {!isLoading && !error && phones.length === 0 && (
        <div>No products available</div>
      )}
    </div>
  );
};

export default ProductsPage;
