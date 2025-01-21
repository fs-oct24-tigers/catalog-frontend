import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from '@/components/product/ProductCard';
import { Product } from '@/types';
import { getSliderProducts } from '@/api/apiProducts';

interface PhonesSliderProps {
  title: string;
  category: string;
  filterType: 'newModels' | 'hotPrices';
}

const ProductsSlider: React.FC<PhonesSliderProps> = ({
  title,
  category,
  filterType,
}) => {
  const [products, setProducts] = useState<Product[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const products = await getSliderProducts(category, filterType);

        setProducts(products);
      } catch (error) {
        console.error('Failed to fetch product:', error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [category, filterType]);

  const swiperRef = useRef<SwiperType | null>(null);
  const handleNext = () => swiperRef.current?.slideNext();
  const handlePrev = () => swiperRef.current?.slidePrev();

  return (
    <div className="w-full mb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-h3 sm:text-h2 font-extrabold text-slate-950 dark:text-textWhite mb-0 md:mb-6">
            {title}
          </h2>
          <div className="flex gap-2 items-center justify-center">
            <button
              className="flex items-center justify-center cursor-pointer bg-icons border-2 hover:border-slate-300 dark:bg-gray-800 dark:hover:bg-gray-600 dark:border-0 w-8 h-8"
              onClick={handlePrev}
            >
              <ChevronLeft className="h-4 w-4 text-slate-950 dark:text-textWhite" />
            </button>
            <button
              className="flex items-center justify-center cursor-pointer bg-icons border-2 hover:border-slate-300 dark:bg-gray-800 dark:hover:bg-gray-600 dark:border-0 w-8 h-8"
              onClick={handleNext}
            >
              <ChevronRight className="h-4 w-4 text-slate-950 dark:text-textWhite" />
            </button>
          </div>
        </div>

        {isLoading ?
          <div className="text-slate-950 dark:text-textWhite">Loading...</div>
        : isError ?
          <div className="text-red-500">Failed to load products</div>
        : products && products.length > 0 ?
          <Swiper
            spaceBetween={24}
            slidesPerView={4}
            loop={true}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            breakpoints={{
              320: { slidesPerView: 1 },
              400: { slidesPerView: 1.2 },
              480: { slidesPerView: 1.6 },
              640: { slidesPerView: 2.4 },
              768: { slidesPerView: 2.8 },
              1024: { slidesPerView: 4 },
            }}
          >
            {products.map((product) => (
              <SwiperSlide key={product.itemId}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        : <div className="text-textWhite">No products available</div>}
      </div>
    </div>
  );
};

export default ProductsSlider;
