import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import 'yet-another-react-lightbox/styles.css';

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
        <div className="hidden sm:flex flex-col gap-2 lg:gap-4 max-h-[464px] overflow-y-auto">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={cn(
                'border-2 flex items-center justify-center transition-colors',
                'w-[35px] h-[35px] lg:w-[80px] lg:h-[80px] shrink-0',
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
          <div className="p-4 w-[288px] lg:w-[464px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedImage}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-square"
                onClick={() => setIsLightboxOpen(true)}
              >
                <img
                  src={`/${images[selectedImage]}`}
                  alt="Main product view"
                  className="w-full h-full object-contain"
                  draggable={false}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex sm:hidden gap-2 mt-2 w-[288px]">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={cn(
                  'border-2 flex items-center justify-center transition-colors',
                  'aspect-square flex-1 shrink-0',
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
