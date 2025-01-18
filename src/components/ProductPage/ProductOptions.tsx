import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types';
import { Color } from '../../types';
import ProductButtons from '../product/ProductButtons';
import { colorOptions } from '@/constants';

type Props = {
  category: string;
  product: Product;
  products: Product[];
  properties: { name: string; value: string | undefined }[];
};

export const ProductOptions: React.FC<Props> = ({
  category,
  product,
  properties,
}) => {
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
          {product.colorsAvailable?.map((color) => (
            <Link
              to={`/${category}/${product.namespaceId}-${product.capacity.toLowerCase()}-${color}`}
              key={color}
              className="flex w-9 h-9 items-center justify-center rounded-full cursor-pointer"
              style={{ backgroundColor: colorOptions[color as Color] }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'white')}
              onMouseLeave={(e) =>
                (e.currentTarget.style.background =
                  colorOptions[color as Color])
              }
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
          {product.capacityAvailable?.map((capacity) => (
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
          <ProductButtons product={product} />
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
