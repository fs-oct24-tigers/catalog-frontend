import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { cn } from '@/lib/utils';

interface PageGalleryProps {
  images: string[];
}

export const PageGallery: React.FC<PageGalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const slides = images.map((image) => ({
    src: `/${image}`,
  }));

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 lg:gap-4">
        <div className="hidden sm:flex flex-col gap-2 lg:gap-4 overflow-y-auto">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={cn(
                'border-2 flex items-center justify-center transition-colors',
                'w-[35px] h-[35px] lg:w-[80px] lg:h-[80px]',
                'hover:border-textWhite',
                selectedImage === index ? 'border-textWhite' : (
                  'border-transparent'
                ),
              )}
            >
              <img
                src={`/${image}`}
                alt={`Product view ${index + 1}`}
                className="max-w-full max-h-full object-contain p-1 lg:p-2"
              />
            </button>
          ))}
        </div>

        <div className="flex flex-col">
          <button
            onClick={() => setIsLightboxOpen(true)}
            className="p-4 w-[288px] lg:w-[464px]"
          >
            <div className="relative aspect-square">
              <img
                src={`/${images[selectedImage]}`}
                alt="Main product view"
                className="w-full h-full object-contain"
              />
            </div>
          </button>

          <div className="flex sm:hidden gap-2 mt-2 w-[288px]">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={cn(
                  'border-2 flex items-center justify-center transition-colors',
                  'aspect-square flex-1',
                  'hover:border-textWhite',
                  selectedImage === index ? 'border-textWhite' : (
                    'border-transparent'
                  ),
                )}
              >
                <img
                  src={`/${image}`}
                  alt={`Product view ${index + 1}`}
                  className="max-w-full max-h-full object-contain p-1"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      <Lightbox
        open={isLightboxOpen}
        close={() => setIsLightboxOpen(false)}
        slides={slides}
        index={selectedImage}
      />
    </>
  );
};
