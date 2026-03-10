import React from 'react';

interface ImageAutoSliderProps {
  images: string[];
  speed?: number;
}

export const ImageAutoSlider: React.FC<ImageAutoSliderProps> = ({ images, speed = 20 }) => {
  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <>
      <style>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .infinite-scroll {
          animation: scroll-right ${speed}s linear infinite;
        }
        .scroll-container {
          mask: linear-gradient(90deg,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%);
          -webkit-mask: linear-gradient(90deg,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%);
        }
        .image-item {
          transition: transform 0.3s ease, filter 0.3s ease;
        }
        .image-item:hover {
          transform: scale(1.05);
          filter: brightness(1.1);
        }
      `}</style>
      
      <div className="relative z-10 w-full flex items-center justify-center py-8">
        <div className="scroll-container w-full">
          <div className="infinite-scroll flex gap-4 md:gap-6 w-max">
            {duplicatedImages.map((image, index) => (
              <div
                key={index}
                className="image-item flex-shrink-0 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-lg overflow-hidden shadow-2xl"
              >
                <img
                  src={image}
                  alt={`Amenity ${(index % images.length) + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
