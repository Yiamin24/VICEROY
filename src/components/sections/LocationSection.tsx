import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Image } from '@/components/ui/image';

const FadeIn: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay } }
    }}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
  >
    {children}
  </motion.div>
);

const locations = [
  {
    title: "Chandigarh Airport",
    drive: "2 Hr",
    distance: "86 Km",
    image: "https://static.wixstatic.com/media/cef78c_fccbc1b1fed940d0b37d592064fdf7e8~mv2.png"
  },
  {
    title: "Shimla Airport",
    drive: "1 Hr 55 Min",
    distance: "61 Km",
    image: "https://static.wixstatic.com/media/cef78c_1fd7f19d5f1c44c4a5fdbcb6db696b0f~mv2.png"
  },
  {
    title: "Kasauli",
    drive: "1 Hr 12 Min",
    distance: "44 Km",
    image: "https://static.wixstatic.com/media/cef78c_27a9dd1e0089442a955419f2ce67a19b~mv2.png"
  },
  {
    title: "State Hospital",
    drive: "35 Min",
    distance: "18 Km",
    image: "https://static.wixstatic.com/media/cef78c_356d06f5ca8a4100abf7d628ad39b526~mv2.png"
  },
  {
    title: "Gorkha Fort",
    drive: "8 Min",
    distance: "1.5 Km",
    image: "https://static.wixstatic.com/media/cef78c_4bfe4c6940c34c3e8f7d18a11e239ae5~mv2.png"
  },
  {
    title: "Solan Market",
    drive: "32 Min",
    distance: "17 Km",
    image: "https://static.wixstatic.com/media/cef78c_e18ce2a0a52242bd9c7f4ccd91bd5b28~mv2.png"
  },
  {
    title: "Ashni River",
    drive: "17 Min",
    distance: "8 Km",
    image: "https://static.wixstatic.com/media/cef78c_1d559446e7c646a3a12d513e566bd3c4~mv2.png"
  },
  {
    title: "Kalka Railway Station",
    drive: "1Hr 30 Min",
    distance: "60 Km",
    image: "https://static.wixstatic.com/media/cef78c_266c481ced8d4517bd3c0bb27e350732~mv2.png"
  },
  {
    title: "National Grocer",
    drive: "35 Min",
    distance: "18 Km",
    image: "https://static.wixstatic.com/media/cef78c_0505ec2df8824d4da35c4afeda9fbe48~mv2.png"
  },
  {
    title: "Mohan Shakti Heritage Park",
    drive: "48 Min",
    distance: "21 Km",
    image: "https://static.wixstatic.com/media/cef78c_26f271d431414041b5790992e6d4487a~mv2.png"
  },
  {
    title: "Menri Monastery",
    drive: "1 Hr",
    distance: "32 Km",
    image: "https://static.wixstatic.com/media/cef78c_20c01af51ada4f57aacaca3df7bb0278~mv2.jpg"
  }
];

const CustomPin = () => (
  <svg width="24" height="32" viewBox="0 0 24 32" xmlns="http://www.w3.org/2000/svg" className="w-6 h-8 md:w-8 md:h-10">
    <path d="M12 0C5.37258 0 0 5.37258 0 12C0 21 12 32 12 32C12 32 24 21 24 12C24 5.37258 18.6274 0 12 0Z" fill="#F4F1EB"/>
    <circle cx="12" cy="12" r="4" fill="#1A1A1A"/>
  </svg>
);

export default function LocationSection() {
  const [currentMobileIndex, setCurrentMobileIndex] = useState(0);

  const nextSlide = () => {
    setCurrentMobileIndex((prev) => (prev + 1) % locations.length);
  };

  const prevSlide = () => {
    setCurrentMobileIndex((prev) => (prev - 1 + locations.length) % locations.length);
  };

  return (
    <section id="location" className="py-12 md:py-14 lg:py-16 bg-[#1A1A1A]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Header Section */}
        <FadeIn>
          <div className="flex flex-col items-center text-center space-y-4 md:space-y-6 pt-4 md:pt-6 pb-10 md:pb-14 max-w-5xl mx-auto">
            <Image 
              src="https://static.wixstatic.com/media/cef78c_be5f8e9d983145789692bcd923e400d4~mv2.png" 
              alt="Map Icon" 
              className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 mb-2 md:mb-4 object-contain"
            />
            <h2 
              className="text-[#F4F1EB] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight"
              style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 300, letterSpacing: '-1px' }}
            >
              Gateway to comfort<br/>&amp; Exploration
            </h2>
            <p 
              className="text-[#F4F1EB]/80 text-base md:text-lg leading-relaxed mt-4 md:mt-8 max-w-4xl mx-auto"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              The Viceroy Estate boasts a prime location that seamlessly connects residents to essential amenities and key destinations. For travelers, easy access to Shimla and Chandigarh airports facilitates seamless journeys to and from major cities and international destinations. Within reach are reputable schools and healthcare facilities and convenience stores, ensuring convenience and peace of mind for families. Additionally, the estate's proximity to temples, shrines and heritage parks offers residents opportunities for spiritual retreats and cultural exploration, enriching their lifestyle with diverse experiences amidst the serene beauty of the Shivalik Hills.
            </p>
          </div>
        </FadeIn>

        {/* Timeline Section */}
        <div className="relative w-full max-w-7xl mx-auto mt-8">
          {/* Center Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/20 transform -translate-x-1/2 z-0"></div>

          {/* Mobile Carousel */}
          <div className="md:hidden relative">
            <div className="relative overflow-hidden">
              <motion.div
                key={currentMobileIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center text-center space-y-3 px-4"
              >
                <div className="w-full max-w-[280px] sm:max-w-[320px] bg-[#2A2A2A] overflow-hidden shadow-2xl mx-auto mb-3">
                  <Image 
                    src={locations[currentMobileIndex].image} 
                    alt={locations[currentMobileIndex].title} 
                    className="w-full h-auto object-contain"
                  />
                </div>
                <h3 className="text-4xl sm:text-5xl text-[#F4F1EB] mb-3 leading-[1.15]" style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 300, letterSpacing: '0.3px' }}>
                  {locations[currentMobileIndex].title}
                </h3>
                <div className="flex flex-col items-center justify-center gap-0.5 text-[#F4F1EB] font-light text-sm sm:text-base tracking-wide">
                  {locations[currentMobileIndex].drive && <span>Drive: {locations[currentMobileIndex].drive}</span>}
                  {locations[currentMobileIndex].distance && <span>Distance: {locations[currentMobileIndex].distance}</span>}
                </div>
              </motion.div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all z-10 backdrop-blur-sm"
                aria-label="Previous location"
              >
                <ChevronLeft className="w-6 h-6 text-white" strokeWidth={1.5} />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all z-10 backdrop-blur-sm"
                aria-label="Next location"
              >
                <ChevronRight className="w-6 h-6 text-white" strokeWidth={1.5} />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {locations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentMobileIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentMobileIndex ? 'bg-[#F4F1EB] w-6' : 'bg-[#F4F1EB]/30'
                  }`}
                  aria-label={`Go to location ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden md:flex flex-col space-y-8 md:space-y-12 lg:space-y-14">
            {locations.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div key={index} className="relative w-full group">
                  
                  {/* Desktop Layout */}
                  <div className="flex w-full items-center relative z-10">
                    
                    {/* Pin on the center line */}
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#1A1A1A] py-8">
                      <CustomPin />
                    </div>

                    <div className={`w-1/2 flex items-center ${isLeft ? 'justify-end pr-6 lg:pr-12 xl:pr-16' : 'absolute right-0 justify-start pl-6 lg:pl-12 xl:pl-16'}`}>
                      <FadeIn delay={0.1}>
                        <div className={`flex items-center gap-4 lg:gap-6 xl:gap-8 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
                          
                          {/* Text Content */}
                          <div className={`flex flex-col justify-center max-w-[180px] lg:max-w-[200px] xl:max-w-[220px] ${isLeft ? 'text-right' : 'text-left'}`}>
                            <h3 className="text-3xl lg:text-4xl xl:text-[2.75rem] text-[#F4F1EB] mb-3 lg:mb-4 leading-[1.15]" style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 300, letterSpacing: '0.3px' }}>
                              {item.title}
                            </h3>
                            <div className="space-y-0.5">
                              {item.drive && (
                                <p className="text-[#F4F1EB] font-light text-sm lg:text-[15px] tracking-wide">
                                  Drive: {item.drive}
                                </p>
                              )}
                              {item.distance && (
                                <p className="text-[#F4F1EB] font-light text-sm lg:text-[15px] tracking-wide">
                                  Distance: {item.distance}
                                </p>
                              )}
                            </div>
                          </div>

                          {/* Image Box */}
                          <div className="w-36 md:w-44 lg:w-48 xl:w-52 flex-shrink-0">
                            <div className="relative w-full bg-[#2A2A2A] overflow-hidden shadow-2xl">
                              <Image 
                                src={item.image} 
                                alt={item.title} 
                                className="w-full h-auto object-contain transform transition-transform duration-700 group-hover:scale-105"
                              />
                            </div>
                          </div>
                          
                        </div>
                      </FadeIn>
                    </div>

                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
