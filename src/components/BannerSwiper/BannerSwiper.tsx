import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

const BannerSwiper: React.FC = () => {
  const sliderImages = [
    {
      url: '/img/banner-accessories.png',
      alt: 'Modern tech accessories including headphones and smartwatch',
      link: '/accessories',
    },
    {
      url: '/img/banner-phones.png',
      alt: 'Latest smartphones displayed on wooden surface',
      link: '/phones',
    },
    {
      url: '/img/banner-tablets.png',
      alt: 'Modern tablets and digital devices',
      link: '/tablets',
    },
  ];

  const swiperRef = useRef<Swiper | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [chevronHeight, setChevronHeight] = useState(80);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    swiperRef.current = new Swiper('.swiper-container', {
      loop: true,
      autoplay: {
        delay: 3000,
      },
      on: {
        slideChange: (swiper) => {
          setActiveIndex(swiper.realIndex);
        },
      },
    });

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    const updateChevronHeight = () => {
      if (imageContainerRef.current) {
        const imageHeight = imageContainerRef.current.clientHeight;
        setChevronHeight(imageHeight);
      }
    };

    updateChevronHeight();
    window.addEventListener('resize', updateChevronHeight);

    return () => {
      window.removeEventListener('resize', updateChevronHeight);
    };
  }, []);

  const goToNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const goToPrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const goToSlide = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <div className="w-full mb-24">
      <div className="flex justify-center py-8 md:block">
        <div className="w-full max-w-7xl mx-auto">
          <div className="relative flex items-center justify-center gap-4 h-full">
            <button
              className="hidden md:flex items-center justify-center cursor-pointer w-8 bg-icons border-2 bg-gray-800 border-gray-800 hover:bg-gray-700 hover:border-gray-700"
              style={{ height: chevronHeight }}
              onClick={goToPrevSlide}
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div
              className="swiper-container w-full overflow-hidden"
              ref={imageContainerRef}
            >
              <div className="swiper-wrapper">
                {sliderImages.map((image, index) => (
                  <div className="swiper-slide relative" key={index}>
                    <img
                      src={image.url}
                      className="w-full h-[300px] sm:h-[400px] lg:h-[400px] object-cover"
                      alt={image.alt}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
                    <Link
                      to={image.link}
                      className="hidden sm:block absolute bottom-12 left-20 text-white px-6 py-2 rounded-full border-solid border-gray-800 border-2 hover:bg-gray-700 hover:border-gray-700 font-semibold"
                    >
                      ORDER NOW
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <button
              className="hidden md:flex items-center justify-center cursor-pointer w-8 bg-icons border-2 bg-gray-800 border-gray-800 hover:bg-gray-700 hover:border-gray-700"
              style={{ height: chevronHeight }}
              onClick={goToNextSlide}
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-3 justify-center">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-1 transition-all duration-300 ${
              index === activeIndex ? 'bg-white' : 'bg-gray-700'
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerSwiper;
