import React, { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

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
      buttonText: 'ORDER NOW',
    },
    {
      url: '/img/banner-tablets.png',
      alt: 'Modern tablets and digital devices',
      link: '/tablets',
      buttonText: 'ORDER NOW',
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
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
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
                  <div
                    className={`swiper-slide relative ${image.customClass || ''} ${image.bgColor || ''}`}
                    key={index}
                  >
                    {index === 0 ?
                      <div className="flex flex-col md:flex-row h-[300px] sm:h-[400px] lg:h-[400px]">
                        <div className="hidden md:block w-full md:w-1/2 flex-shrink-1 flex items-center justify-center md:justify-start my-4">
                          <div className="w-full md:w-[420px] h-full ml-0 md:ml-5 bg-gray-800 rounded-3xl p-8">
                            <div className="text-left ml-0 md:ml-8 h-full flex flex-col justify-between">
                              <div>
                                <p className="text-purple-500 text-2xl md:text-4xl font-bold mb-2">
                                  Now available
                                </p>
                                <p className="text-purple-500 text-xl md:text-3xl font-bold mb-6">
                                  in our store! 👌
                                </p>
                                <p className="text-gray-400 text-sm md:text-l mb-6">
                                  Be the first!
                                </p>
                              </div>
                            </div>
                            <div className="absolute bottom-14 left-10 md:left-20">
                              <Link
                                to={image.link}
                                className="inline-block bg-transparent border-[1.5px] border-gray-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-full hover:bg-gray-700 hover:border-gray-700 font-semibold"
                              >
                                {image.buttonText}
                              </Link>
                            </div>
                          </div>
                        </div>

                        <div className="w-full md:w-1/2 flex-shrink-1 relative flex flex-col items-center justify-between h-full py-4 md:py-8">
                          <div className="text-center">
                            <h2 className="text-white text-2xl md:text-4xl font-bold mb-4">
                              iPhone 14 Pro
                            </h2>
                            <p className="text-gray-400 text-sm md:text-xl">
                              Pro. Beyond.
                            </p>
                          </div>
                          <img
                            src={image.url || '/placeholder.svg'}
                            className="w-auto h-auto max-h-full object-contain"
                            alt={image.alt}
                          />
                        </div>
                      </div>
                    : <div className="relative h-[300px] sm:h-[400px] lg:h-[400px]">
                        <img
                          src={image.url || '/placeholder.svg'}
                          className="w-full h-full object-cover"
                          alt={image.alt}
                        />
                        <div className="absolute bottom-14 left-10 md:left-20">
                          <Link
                            to={image.link}
                            className="inline-block bg-transparent border-[1.5px] border-gray-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-full hover:bg-gray-700 hover:border-gray-700 font-semibold"
                          >
                            {image.buttonText}
                          </Link>
                        </div>
                      </div>
                    }
                  </div>
                ))}
              </div>
            </div>

            <button
              className="hidden md:flex items-center justify-center cursor-pointer w-8 bg-icons border-1 bg-gray-800 border-gray-800 hover:bg-gray-700 hover:border-gray-700"
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
              index === activeIndex ? 'bg-white w-4' : 'bg-gray-600'
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
