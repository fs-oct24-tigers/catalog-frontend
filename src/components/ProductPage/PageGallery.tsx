import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import 'yet-another-react-lightbox/styles.css';

interface PageGalleryProps {
  images: string[];
}

interface ThumbnailProps {
  src: string;
  isSelected: boolean;
  onClick: () => void;
  isMobile?: boolean;
}

const ANIMATION_VARIANTS = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

const ANIMATION_CONFIG = {
  duration: 0.3,
};

const Thumbnail = ({ src, isSelected, onClick, isMobile }: ThumbnailProps) => (
  <button
    type="button"
    onClick={onClick}
    className={cn(
      'border-2 flex items-center justify-center transition-colors shrink-0',
      isMobile ?
        'aspect-square flex-1'
      : 'w-[35px] h-[35px] lg:w-[80px] lg:h-[80px]',
      isSelected ? 'border-textWhite' : 'border-transparent',
    )}
    aria-pressed={isSelected}
  >
    <img
      src={`/${src}`}
      alt="Product thumbnail"
      className="max-w-full max-h-full object-contain p-1 lg:p-2"
      loading="lazy"
    />
  </button>
);

export const PageGallery = ({ images }: PageGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const slides = images.map((image) => ({ src: `/${image}` }));

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-center items-center">
        <div className="hidden sm:flex flex-col gap-2 lg:gap-4 max-h-[464px] overflow-y-auto">
          {images.map((image, index) => (
            <Thumbnail
              key={image}
              src={image}
              isSelected={selectedIndex === index}
              onClick={() => setSelectedIndex(index)}
            />
          ))}
        </div>

        <div className="flex flex-col">
          <div className="w-[288px] lg:w-[464px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndex}
                initial={ANIMATION_VARIANTS.initial}
                animate={ANIMATION_VARIANTS.animate}
                exit={ANIMATION_VARIANTS.exit}
                transition={{ duration: ANIMATION_CONFIG.duration }}
                className="relative aspect-square"
                onClick={() => setIsLightboxOpen(true)}
              >
                <img
                  src={`/${images[selectedIndex]}`}
                  alt="Main product view"
                  className="w-full h-full object-contain"
                  draggable={false}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex sm:hidden gap-2 mt-2 w-[288px]">
            {images.map((image, index) => (
              <Thumbnail
                key={image}
                src={image}
                isSelected={selectedIndex === index}
                onClick={() => setSelectedIndex(index)}
                isMobile
              />
            ))}
          </div>
        </div>
      </div>

      <Lightbox
        open={isLightboxOpen}
        close={() => setIsLightboxOpen(false)}
        slides={slides}
        index={selectedIndex}
      />
    </>
  );
};
