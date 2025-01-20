import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import useSliderQuery from '@/hooks/useSliderQuery';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from '@/components/product/ProductCard';
import { Product } from '@/types';
import { filterProducts } from '@/utils/filterProducts';
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
    <div className="w-full mb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-h3 sm:text-h2 font-extrabold text-slate-950 dark:text-textWhite mb-6">
            {title}
          </h2>
          <div className="flex gap-2 items-center justify-center">
            <button
              className="flex items-center justify-center cursor-pointer bg-icons border-2 hover:border-slate-300 dark:bg-gray-800 dark:hover:bg-gray-600 dark:border-0 w-8 h-8"
              onClick={handlePrev}
            >
              <ChevronLeft className="h-4 w-4 text-slate-900 dark:text-textWhite" />
            </button>
            <button
              className="flex items-center justify-center cursor-pointer bg-icons border-2 hover:border-slate-300 dark:bg-gray-800 dark:hover:bg-gray-600 dark:border-0 w-8 h-8"
              onClick={handleNext}
            >
              <ChevronRight className="h-4 w-4 text-slate-900 dark:text-textWhite" />
            </button>
          </div>
        </div>

        {isLoading ?
          <div className="text-slate-950 dark:text-textWhite">Loading...</div>
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
        : <div className="text-textWhite">No products available</div>}
      </div>
    </div>
  );
};

export default PhonesSlider;
