import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useQuery } from '@tanstack/react-query';
import { get } from '@/api/fetchProducts';
import ProductCard from '@/components/product/ProductCard';
import { Swiper as SwiperType } from 'swiper';
import { Product, ApiPhone } from '@/types';
import { filterProducts } from './filterProducts';

interface PhonesSliderProps {
  title: string;
  apiEndpoint: string;
  filterType?: 'newModels' | 'hotPrices';
}

const PhonesSlider: React.FC<PhonesSliderProps> = ({
  title,
  apiEndpoint,
  filterType,
}) => {
  const swiperRef = useRef<SwiperType | null>(null);

  const {
    data: response,
    isLoading,
    isError,
    error,
  } = useQuery<ApiPhone[]>({
    queryKey: ['products', apiEndpoint],
    queryFn: () => get(apiEndpoint),
  });

  const products: Product[] = filterProducts(
    (response || []).map((item: ApiPhone) => ({
      id: item.id || item.itemId || '',
      category: item.category,
      name: item.name,
      capacity: item.capacity,
      priceRegular: item.priceRegular || item.fullPrice || 0,
      priceDiscount: item.priceDiscount || item.price || 0,
      screen: item.screen,
      ram: item.ram,
      color: item.color,
      year: item.year || 2019,
      images: item.images || (item.image ? [item.image] : []),
    })),
    filterType,
  );

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
          <div className="text-red-500">
            Failed to load products. Error: {error?.message}
          </div>
        : products.length > 0 ?
          <Swiper
            spaceBetween={24}
            slidesPerView={4}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            breakpoints={{
              320: { slidesPerView: 1.4 },
              640: { slidesPerView: 2.4 },
              768: { slidesPerView: 2.4 },
              1024: { slidesPerView: 4 },
            }}
          >
            {products.map((product) => (
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
