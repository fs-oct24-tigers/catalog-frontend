import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types';
import { Button } from '../ui/button';
import { Heart } from 'lucide-react';
import { Color } from '../../types';

type Props = {
  category: string;
  product: Product;
  products: Product[];
  properties: { name: string; value: string }[];
};

export const ProductOptions: React.FC<Props> = ({
  category,
  product,
  properties,
}) => {
  const selected = false;
  // const navigate = useNavigate();

  // const handleClick = () => {
  //   setSelected(!selected);
  // };

  // const handleCapacityChange = (capacity: string) => {
  //   setSelectedCapacity(capacity);

  //   const updatedProduct = products.find(
  //     (phone) =>
  //       phone.capacity === capacity &&
  //       phone.namespaceId === product.namespaceId,
  //   );

  //   if (updatedProduct) {
  //     setSelectedProduct(updatedProduct);
  //   }
  // };

  // const handleColorChange = (color: Color) => {
  //   const updateProduct = products.find(
  //     (phone) =>
  //       phone.color === color &&
  //       phone.capacity === selectedCapacity &&
  //       phone.namespaceId === product.namespaceId,
  //   );

  //   if (updateProduct) {
  //     navigate(`/${category}/${updateProduct.id}`);
  //   }
  // };

  const colorOptions: Record<Color, string> = {
    green: '#056434',
    black: '#2C2C2C',
    red: '#DC143C',
    yellow: '#FFCC00',
    white: '#E0FFFF',
    purple: '#7B68EE',
    spacegray: '#3D3D3D',
    midnightgreen: '#008000',
    gold: '#CD853F',
    silver: '#808080',
    rosegold: '#DDA0DD',
    coral: '#FFA500',
    midnight: '#008080',
    spaceblack: '#2F4F4F',
    blue: '#00BFFF',
    pink: '#FA9BCB',
    graphite: '#5B5B5B',
    sierrablue: '#4682B4',
  };

  const hasDiscount = true;

  return (
    <div className="flex flex-col lg:w-[512px] sm:w-[288px] md:w-[237px] text-left">
      <div className="flex justify-between items-center w-full">
        <span className="text-xs font-bold text-textGray text-left">
          Available colors
        </span>

        <span className="text-xs font-bold text-heartHover text-right">
          ID: 802390
        </span>
      </div>

      <div className="flex flex-col lg:w-[320px] sm:w-[288px] md:w-[237px]">
        <div className="flex space-x-2 mt-2">
          {product.colorsAvailable.map((color) => (
            <Link
              to={`/${category}/${product.namespaceId}-${product.capacity.toLowerCase()}-${color}`}
              key={color}
              className="flex w-9 h-9 items-center justify-center rounded-full cursor-pointer"
              style={{ backgroundColor: colorOptions[color as Color] }}
            >
              <div className="flex items-center justify-center rounded-full w-8 h-8 bg-bodyBg">
                <div
                  className="rounded-full h-[27px] w-[27px]"
                  style={{ backgroundColor: colorOptions[color as Color] }}
                />
              </div>
            </Link>
          ))}
        </div>

        <div className="h-0.5 bg-lineGray my-6" />

        <div className="text-xs font-bold text-textGray text-left">
          Select capacity
        </div>

        <div className="flex space-x-2 mt-2">
          {product.capacityAvailable.map((capacity) => (
            <Link
              to={`/${category}/${product.namespaceId}-${capacity.toLowerCase()}-${product.color}`}
              key={capacity}
              className={`w-[63px] h-8 bg-bodyBg border border-heartHover text-sm font-semibold text-center flex items-center justify-center
              ${product.capacity === capacity ? 'bg-white text-bodyBg' : 'hover:bg-textWhite hover:text-bodyBg'}`}
            >
              {capacity}
            </Link>
          ))}
        </div>

        <div className="h-0.5 bg-lineGray mt-6 mb-8" />

        <div className="flex items-center space-x-2">
          <p className="text-[32px] text-left font-extrabold text-textWhite">
            ${product.priceDiscount}
          </p>
          {product.priceRegular !== product.priceDiscount && hasDiscount && (
            <p className="text-[22px] text-left font-semibold text-textGray line-through">
              ${product.priceRegular}
            </p>
          )}
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 w-full mt-4 mb-8">
          <Button className="text-sm font-bold text-textWhite flex-grow text-left">
            Add to cart
          </Button>

          <div
            className={`w-10 h-10 flex items-center justify-center ${
              selected ?
                'bg-transparent border border-heartHover'
              : 'bg-heartGray border border-transparent hover:bg-heartHover'
            }`}
          >
            <Heart
              style={{
                width: '17px',
                height: '15px',
                fill: selected ? 'red' : '',
                stroke: selected ? 'none' : '',
              }}
            />
          </div>
        </div>

        {properties.map((property, index) => (
          <div key={index} className="flex justify-between items-center w-full">
            <span className="text-sm font-semibold text-textSecondaryGray text-left">
              {property.name}
            </span>
            <span className="text-sm font-semibold text-textWhite text-right">
              {property.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
