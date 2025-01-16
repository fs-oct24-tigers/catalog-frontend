import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import useSliderQuery from '@/hooks/useSliderQuery';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/product/ProductCard';
import { Product } from '@/types';
import { filterProducts } from '../../utils/filterProducts';
import { PhonesSliderProps } from '@/types';

const PhonesSlider: React.FC<PhonesSliderProps> = ({
  title,
  apiEndpoint,
  filterType,
}) => {
  const { products, isLoading, isError } = useSliderQuery({
    apiEndpoint,
  });

  const filteredProducts: Product[] = filterProducts(
    (products || []).map((item: Product) => item),
    filterType,
  );

  const swiperRef = useRef<SwiperType | null>(null);
  const handleNext = () => swiperRef.current?.slideNext();
  const handlePrev = () => swiperRef.current?.slidePrev();

  return (
    <div className="w-full mb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto ml-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-white text-3xl font-bold">{title}</h2>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="bg-gray-800 hover:bg-gray-700 border-0"
              onClick={handlePrev}
            >
              <ChevronLeft className="h-4 w-4 text-white" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="bg-gray-800 hover:bg-gray-700 border-0"
              onClick={handleNext}
            >
              <ChevronRight className="h-4 w-4 text-white" />
            </Button>
          </div>
        </div>

        {isLoading ?
          <div className="text-white">Loading...</div>
        : isError ?
          <div className="text-red-500">Failed to load products</div>
        : products.length > 0 ?
          <Swiper
            spaceBetween={24}
            slidesPerView={4}
            loop={true}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            breakpoints={{
              320: { slidesPerView: 1.4 },
              640: { slidesPerView: 2.4 },
              768: { slidesPerView: 2.4 },
              1024: { slidesPerView: 4 },
            }}
          >
            {filteredProducts.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        : <div className="text-white">No products available</div>}
      </div>
    </div>
  );
};

export default PhonesSlider;
