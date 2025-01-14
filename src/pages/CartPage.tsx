import phones from '../../public/api/phones.json';
import { Card, CardContent } from '@/components/ui/card';
import { Minus, Plus, X } from 'lucide-react';
import { useState } from 'react';

const phone = phones[0];

const CartPage = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <>
      <div>
        <h1>Cart</h1>
      </div>

      <div className="w-[752px] h-[128px] flex">
        <Card className="px-6">
          <CardContent className="p-0 flex justify-between items-center">
            <div className="bg-cardBg hover:bg-lineGray">
              <X size={16} />
            </div>
            <div>
              <img
                src="img/phones/apple-iphone-7/black/00.webp"
                alt="iPhone"
                className="h-[66px] w-[62px] m-8"
              />
            </div>
            <div className="mr-6">{phone.name}</div>
            <div className="flex">
              <div
                onClick={decrement}
                className="w-[32px] h-[32px] flex items-center justify-center bg-cardBg hover:bg-lineGray"
              >
                <Minus size={16} />
              </div>
              <div className="flex items-center mx-3.5">{count}</div>
              <div
                onClick={increment}
                className="w-[32px] h-[32px] flex items-center justify-center bg-cardBg hover:bg-lineGray"
              >
                <Plus
                  size={16}
                  style={{
                    color: 'gray',
                  }}
                />
              </div>
            </div>
            <div className="ml-14">${phone.priceRegular}</div>
          </CardContent>
        </Card>
      </div>

      <div className=" flex">
        <h3>Total Price</h3>
        <p>Total items</p>
        <div>Button Checkout</div>
      </div>
    </>
  );
};

export default CartPage;
