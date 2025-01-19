import React, { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import '@/css/index.css';

const BannerSwiper: React.FC = () => {
  const sliderImages = [
    {
      url: '/img/iphone-14.png',
      alt: 'iPhone 14',
      link: '/phones',
      customClass: 'first-slide',
      buttonText: 'ORDER NOW',
      bgColor: 'bg-black',
    },
    {
      url: '/img/banner-accessories.png',
      alt: 'Latest smartphones displayed on wooden surface',
      link: '/accessories',
    },
    {
      url: '/img/banner-tablets.png',
      alt: 'Modern tablets and digital devices',
      link: '/tablets',
    },
  ];

  const swiperRef = useRef<Swiper | null>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [chevronHeight, setChevronHeight] = React.useState(80);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    swiperRef.current = new Swiper('.swiper-container', {
      loop: true,
      autoplay: {
        delay: 3000,
      },
      slidesPerView: 1,
      spaceBetween: 10,
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
      <div className="flex justify-center py-8">
        <div className="w-full max-w-7xl mx-auto">
          <div className="relative flex items-center justify-center gap-4 h-full">
            <button
              className="items-center justify-center cursor-pointer w-8 bg-icons border-1 bg-slate-300 hover:bg-slate-500 dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-600 dark:hover:border-gray-700 hidden sm:flex"
              style={{ height: chevronHeight }}
              onClick={goToPrevSlide}
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4 " />
            </button>

            <div
              className="swiper-container w-full overflow-hidden"
              ref={imageContainerRef}
            >
              <div className="swiper-wrapper">
                {sliderImages.map((image, index) => (
                  <div
                    className={`swiper-slide relative ${image.customClass || ''} ${image.bgColor || ''}`}
                    key={index}
                  >
                    {index === 0 ?
                      <div className="flex flex-row h-[400px] justify-between">
                        <div className="flex w-[40%] max-w-[450px] flex-shrink-1 relative flex-col items-center justify-between h-full ml-6 py-4 sm:flex">
                          <div className="w-full h-full bg-gray-800 rounded-3xl p-8 flex flex-col justify-between">
                            <div className="text-left">
                              <p className="text-purple-500 text-4xl font-bold mb-2">
                                Now available
                              </p>
                              <p className="text-purple-500 text-3xl font-bold mb-6">
                                in our store! 👌
                              </p>
                              <p className="text-gray-400 text-l mb-6">
                                Be the first!
                              </p>
                            </div>
                            <div className="absolute bottom-14 text-center">
                              <Link
                                to={image.link}
                                className="inline-block bg-transparent border-[1.5px] border-gray-600 text-textWhite px-6 py-2 rounded-full hover:bg-gray-600 hover:border-gray-700 font-semibold"
                              >
                                {image.buttonText}
                              </Link>
                            </div>
                          </div>
                        </div>

                        <div className="flex w-[60%] max-w-[600px] flex-shrink-1 relative flex-col items-center justify-between h-full py-4 mt-6">
                          <div className="text-center">
                            <h2 className="gradient-text text-4xl font-bold mb-4">
                              iPhone 14 Pro
                            </h2>
                            <p className="text-gray-400 text-xl">
                              Pro. Beyond.
                            </p>
                          </div>
                          <Link to={image.link}>
                            <img
                              src={image.url}
                              className="w-full h-auto max-h-[300px] object-contain self-end"
                              alt={image.alt}
                            />
                          </Link>
                        </div>
                      </div>
                    : <div className="relative h-[400px]">
                        <Link to={image.link}>
                          <img
                            src={image.url}
                            className="w-full h-full object-cover"
                            alt={image.alt}
                          />
                        </Link>
                      </div>
                    }
                  </div>
                ))}
              </div>
            </div>

            <button
              className="items-center justify-center cursor-pointer w-8 bg-icons border-1 bg-slate-300 hover:bg-slate-500 dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-600 dark:hover:border-gray-700 hidden sm:flex"
              style={{ height: chevronHeight }}
              onClick={goToNextSlide}
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-4 justify-center">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-1 transition-all duration-300 ${
              index === activeIndex ?
                'bg-slate-300 dark:bg-white w-4'
              : 'bg-slate-500 dark:bg-gray-600'
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
