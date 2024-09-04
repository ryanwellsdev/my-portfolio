import React from "react";
import Image from "next/image";

// Modal Component for Slideshow
interface SlideshowModalProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

const SlideshowModal: React.FC<SlideshowModalProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrevious,
}) => {
  if (!isOpen) return null;

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
      onClick={handleBackgroundClick}
    >
      {/* Flex container for the modal content */}
      <div className="relative w-full max-w-4xl h-full max-h-[80vh] flex items-center justify-center mx-auto">
        {/* Previous button - adjust spacing and size based on screen size */}
        <button
          className="absolute left-8 top-1/2 transform -translate-y-1/2 flex items-center justify-center text-white bg-black bg-opacity-0 hover:bg-opacity-75 z-50 text-3xl md:text-3xl sm:text-xl p-4"
          onClick={onPrevious}
        >
          {"<"}
        </button>

        {/* Image container */}
        <div className="relative w-full h-[80vh] max-w-[85%] lg:max-w-[90%] mx-auto">
          <Image
            src={images[currentIndex]}
            alt="Slideshow image"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Next button - adjust spacing and size based on screen size */}
        <button
          className="absolute right-8 top-1/2 transform -translate-y-1/2 flex items-center justify-center text-white bg-black bg-opacity-0 hover:bg-opacity-75 z-50 text-3xl md:text-3xl sm:text-xl p-4"
          onClick={onNext}
        >
          {">"}
        </button>

        {/* X button for close positioned at the top right */}
        <button
          className="absolute top-16 right-6 flex items-center justify-center text-white text-2xl md:text-2xl sm:text-xl font-bold bg-black bg-opacity-0 hover:bg-opacity-75 p-6 z-50"
          onClick={onClose}
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default SlideshowModal;
