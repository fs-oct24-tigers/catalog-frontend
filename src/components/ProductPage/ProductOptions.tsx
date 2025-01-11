import React, { useState } from 'react';
import { Phone } from '../../types';
import { Button } from '../ui/button';
import { Heart } from 'lucide-react';

type Props = {
  product: Phone;
  products: Phone[];
};

export const ProductOptions: React.FC<Props> = ({ product, products }) => {
  const [selectedCapacity, setSelectedCapacity] = useState(product.capacity);
  const [selectedProduct, setSelectedProduct] = useState(product);
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
  };

  const handleCapacityChange = (capacity: string) => {
    setSelectedCapacity(capacity);

    const updatedProduct = products.find(
      (phone) =>
        phone.capacity === capacity &&
        phone.namespaceId === product.namespaceId,
    );

    if (updatedProduct) {
      setSelectedProduct(updatedProduct);
    }
  };

  const hasDiscount = true;

  return (
    <div className="flex flex-col m-10 lg:w-[512px] sm:w-[288px] md:w-[237px]">
      <div className="flex justify-between items-center w-full">
        <span className="text-xs font-bold text-textGray">
          Available colors
        </span>
        <span className="text-xs font-bold text-textMutedGra text-right">
          ID: {selectedProduct.id}
        </span>
      </div>

      <div className="flex flex-col lg:sw-[320px] sm:w-[288px] md:w-[237px]">
        <div className="flex space-x-2 mt-2">
          {selectedProduct.colorsAvailable.map((color, index) => (
            <div
              key={index}
              className="flex w-9 h-9 items-center justify-center rounded-full"
              style={{ backgroundColor: color }}
            >
              <div className="flex items-center justify-center rounded-full w-8 h-8 bg-bodyBg">
                <div
                  className="rounded-full h-[27px] w-[27px]"
                  style={{ backgroundColor: color }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="h-0.5 bg-lineGray my-6" />

        <div className="text-xs font-bold text-textGray">Select capacity</div>

        <div className="flex space-x-2 mt-2">
          {selectedProduct.capacityAvailable.map((capacity) => (
            <button
              key={capacity}
              className={`w-[63px] h-8 bg-bodyBg border border-heartHover text-sm font-semibold text-center 
              ${selectedCapacity === capacity ? 'bg-white text-bodyBg' : 'hover:bg-textWhite hover:text-bodyBg'}`}
              onClick={() => handleCapacityChange(capacity)}
            >
              {capacity}
            </button>
          ))}
        </div>

        <div className="h-0.5 bg-lineGray mt-6 mb-8" />

        <div className="flex items-center space-x-2">
          <p className="text-[32px] text-left font-extrabold text-textWhite">
            ${selectedProduct.priceDiscount}
          </p>
          {selectedProduct.priceRegular !== selectedProduct.priceDiscount &&
            hasDiscount && (
              <p className="text-[22px] text-left font-semibold text-textGray line-through">
                ${selectedProduct.priceRegular}
              </p>
            )}
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 w-full mt-4 mb-8">
          <Button className="text-sm font-bold text-textWhite flex-grow">
            Add to cart
          </Button>

          <div
            className={`w-10 h-10 flex items-center justify-center ${
              selected ?
                'bg-transparent border border-heartHover'
              : 'bg-heartGray border border-transparent hover:bg-heartHover'
            }`}
            onClick={handleClick}
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

        <div className="flex justify-between items-center w-full">
          <span className="text-sm font-semibold text-textSecondaryGray">
            Screen
          </span>
          <span className="text-sm font-semibold text-textWhite">
            {product.screen}
          </span>
        </div>

        <div className="flex justify-between items-center w-full">
          <span className="text-sm font-semibold text-textSecondaryGray">
            Resolution
          </span>
          <span className="text-sm font-semibold text-textWhite">
            {product.resolution}
          </span>
        </div>

        <div className="flex justify-between items-center w-full">
          <span className="text-sm font-semibold text-textSecondaryGray">
            Processor
          </span>
          <span className="text-sm font-semibold text-textWhite">
            {product.processor}
          </span>
        </div>

        <div className="flex justify-between items-center w-full">
          <span className="text-sm font-semibold text-textSecondaryGray">
            RAM
          </span>
          <span className="text-sm fond-semibold text-textWhite">
            {product.ram}
          </span>
        </div>
      </div>
    </div>
  );
};