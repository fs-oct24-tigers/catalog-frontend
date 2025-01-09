import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '../ui/button';
import { Heart } from 'lucide-react';

const ProductCard: React.FC = () => {
  return (
    <Card className="w-[272px]">
      <CardHeader>
        <CardTitle>
          <h2 className="text-sm font-semibold text-textWhite px-6 py-3">
            Apple iPhone 11 Pro Max 512GB Midnight Green (iMT9G2FS/A)
          </h2>
        </CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <Button>Button</Button>
        <Button variant="secondary">Button</Button>
        <Heart
          color={'red'}
          fill={'red'}
        />
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
