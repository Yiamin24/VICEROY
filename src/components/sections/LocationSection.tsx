import React from 'react';
import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

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
    drive: "1 Hr 30 Min",
    distance: "60 Km",
    image: "https://static.wixstatic.com/media/cef78c_266c481ced8d4517bd3c0bb27e350732~mv2.png"
  },
  {
    title: "National Grocer",
    image: "https://static.wixstatic.com/media/cef78c_0505ec2df8824d4da35c4afeda9fbe48~mv2.png"
  },
  {
    title: "Mohan Shakti Heritage park",
    image: "https://static.wixstatic.com/media/cef78c_26f271d431414041b5790992e6d4487a~mv2.png"
  },
  {
    title: "Menri Monastery",
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
  return (
    <section id="location" className="py-24 md:py-32 bg-[#1A1A1A] overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Header Section */}
        <FadeIn>
          <div className="flex flex-col items-center text-center space-y-6 pt-12 pb-20 md:pb-32 max-w-5xl mx-auto">
            <Image 
              src="https://static.wixstatic.com/media/cef78c_be5f8e9d983145789692bcd923e400d4~mv2.png" 
              alt="Map Icon" 
              className="w-16 h-16 md:w-20 md:h-20 mb-4 object-contain"
            />
            <h2 
              className="text-[#F4F1EB] text-4xl md:text-5xl lg:text-7xl leading-tight"
              style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 300, letterSpacing: '-1px' }}
            >
              Gateway to comfort<br/>&amp; Exploration
            </h2>
            <p className="text-[#F4F1EB] opacity-80 text-lg md:text-xl leading-relaxed mt-8 font-medium max-w-4xl mx-auto">
              The Viceroy Estate boasts a prime location that seamlessly connects residents to essential amenities and key destinations. For travelers, easy access to Shimla and Chandigarh airports facilitates seamless journeys to and from major cities and international destinations. Within reach are reputable schools and healthcare facilities and convenience stores, ensuring convenience and peace of mind for families. Additionally, the estate's proximity to temples, shrines and heritage parks offers residents opportunities for spiritual retreats and cultural exploration, enriching their lifestyle with diverse experiences amidst the serene beauty of the Shivalik Hills.
            </p>
          </div>
        </FadeIn>

        {/* Timeline Section */}
        <div className="relative w-full max-w-[1400px] mx-auto mt-8 px-2 sm:px-4">
          {/* Center Line for Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/20 transform -translate-x-1/2 z-0"></div>

          <div className="flex flex-col space-y-24 md:space-y-40">
            {locations.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div key={index} className="relative w-full group overflow-hidden md:overflow-visible">
                  
                  {/* Desktop Layout -> Flex wrap handles smaller screens gracefully without overflow */}
                  <div className="hidden lg:flex w-full items-center relative z-10">
                    
                    {/* Pin on the center line */}
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#1A1A1A] py-8 px-4 z-20">
                      <CustomPin />
                    </div>

                    {/* Left Column Container */}
                    <div className="w-1/2 flex justify-end pr-8 xl:pr-16">
                      {isLeft && (
                        <FadeIn delay={0.1}>
                          <div className="flex items-center flex-row justify-end w-full max-w-[500px] xl:max-w-[650px]">
                            {/* Text Content */}
                            <div className="flex flex-col justify-center mr-6 xl:mr-10 text-left flex-shrink-0 min-w-[140px] xl:min-w-[180px]">
                              <h3 className="text-3xl xl:text-5xl text-[#F4F1EB] mb-2 xl:mb-4 whitespace-nowrap" style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 300 }}>
                                {item.title}
                              </h3>
                              {item.drive && (
                                <p className="text-[#F4F1EB] font-medium text-sm xl:text-lg tracking-wide mb-1">
                                  Drive: {item.drive}
                                </p>
                              )}
                              {item.distance && (
                                <p className="text-[#F4F1EB] font-medium text-sm xl:text-lg tracking-wide">
                                  Distance: {item.distance}
                                </p>
                              )}
                            </div>

                            {/* Image Box */}
                            <div className="w-full flex-grow max-w-[280px] xl:max-w-[400px]">
                              <Image 
                                src={item.image} 
                                alt={item.title} 
                                className="w-full h-auto object-contain transform transition-transform duration-700 hover:scale-105"
                              />
                            </div>
                          </div>
                        </FadeIn>
                      )}
                    </div>

                    {/* Right Column Container */}
                    <div className="w-1/2 flex justify-start pl-8 xl:pl-16">
                      {!isLeft && (
                        <FadeIn delay={0.1}>
                          <div className="flex items-center flex-row-reverse justify-end w-full max-w-[500px] xl:max-w-[650px]">
                            {/* Text Content */}
                            <div className="flex flex-col justify-center ml-6 xl:ml-10 text-left flex-shrink-0 min-w-[140px] xl:min-w-[180px]">
                              <h3 className="text-3xl xl:text-5xl text-[#F4F1EB] mb-2 xl:mb-4 whitespace-nowrap" style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 300 }}>
                                {item.title}
                              </h3>
                              {item.drive && (
                                <p className="text-[#F4F1EB] font-medium text-sm xl:text-lg tracking-wide mb-1">
                                  Drive: {item.drive}
                                </p>
                              )}
                              {item.distance && (
                                <p className="text-[#F4F1EB] font-medium text-sm xl:text-lg tracking-wide">
                                  Distance: {item.distance}
                                </p>
                              )}
                            </div>

                            {/* Image Box */}
                            <div className="w-full flex-grow max-w-[280px] xl:max-w-[400px]">
                              <Image 
                                src={item.image} 
                                alt={item.title} 
                                className="w-full h-auto object-contain transform transition-transform duration-700 hover:scale-105"
                              />
                            </div>
                          </div>
                        </FadeIn>
                      )}
                    </div>

                  </div>

                  {/* Tablet & Mobile Layout */}
                  <div className="lg:hidden flex flex-col items-center text-center space-y-6 relative z-10 mx-auto w-full max-w-[500px]">
                    <FadeIn delay={0.1}>
                      <div className="w-full mb-6 relative">
                        <Image 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-auto object-contain max-h-[500px] mx-auto"
                        />
                      </div>
                      <h3 className="text-4xl text-[#F4F1EB] mb-2 px-4" style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 300 }}>
                        {item.title}
                      </h3>
                      <div className="flex flex-col items-center justify-center gap-1 text-[#F4F1EB] font-medium text-lg tracking-wide px-4">
                        {item.drive && <span>Drive: {item.drive}</span>}
                        {item.distance && <span>Distance: {item.distance}</span>}
                      </div>
                    </FadeIn>
                  </div>
                  
                  {/* Mobile Connector Line */}
                  {index !== locations.length - 1 && (
                    <div className="lg:hidden w-[1px] h-32 bg-white/20 mx-auto mt-16 mb-8 relative z-0">
                       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#1A1A1A] py-6">
                         <div className="w-4 h-4 rounded-full border-2 border-[#F4F1EB]"></div>
                       </div>
                    </div>
                  )}

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
