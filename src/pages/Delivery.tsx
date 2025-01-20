import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Breadcrumbs } from '@/components/BreadCrumbs';

export const Delivery: React.FC = () => {
  return (
    <div>
      <Breadcrumbs category="Delivery" />
      <div className="flex flex-col">
        <p className="text-textWhite text-4xl font-semibold">
          Delivery history
        </p>
        <div className="flex items-center space-x-10">
          <p className="text-textWhite text-2xl py-4">Order number</p>
          <div className="text-textGray text-[24px]">256837</div>
        </div>

        <div className="flex items-center w-[300px] justify-between">
          <p className="text-textGray text-base">Your order is in processing</p>
          <div className="bg-textWhite w-4 h-4 rounded-full mx-4"></div>
        </div>
        <ArrowDown size={20} className="text-textWhite my-2" />

        <div className="flex items-center w-[300px] justify-between">
          <p className="text-textGray text-base">
            Your order is ready for shipping
          </p>
          <div className="bg-textWhite w-4 h-4 rounded-full mx-4"></div>
        </div>
        <ArrowDown size={20} className="text-textWhite my-2" />

        <div className="flex items-center w-[300px] justify-between">
          <p className="text-textGray text-base">Your order has been sent</p>
          <div className="bg-textWhite w-4 h-4 rounded-full mx-4"></div>
        </div>
        <ArrowDown size={20} className="text-textWhite my-2" />

        <div className="flex item-center w-[300px] justify-between">
          <p className="text-textGray text-base">Your order is on the way</p>
          <div className="bg-textWhite w-4 h-4 rounded-full mx-4"></div>
        </div>
        <ArrowDown size={20} className="text-textWhite my-2 " />

        <div className="flex items-center w-[300px] justify-between">
          <p className="text-textGray text-base">
            Your order has been delivered
          </p>
          <div className="bg-lime-600 w-4 h-4 rounded-full mx-4"></div>
        </div>

        <div className="flex items-center">
          <img
            src="/img/catdelivery.png"
            alt="Cat delivery"
            className="w-[200px] h-auto"
          />
          <p className="text-textWhite text-[18px]">Your can pick it up!</p>
        </div>
      </div>
    </div>
  );
};
