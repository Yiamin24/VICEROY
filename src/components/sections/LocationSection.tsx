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
    title: "Chandigarh \n Airport",
    drive: "2 Hr",
    distance: "86 Km",
    image: "https://static.wixstatic.com/media/cef78c_fccbc1b1fed940d0b37d592064fdf7e8~mv2.png",
    imageWidth: "max-w-[500px]"
  },
  {
    title: "Shimla\nAirport",
    drive: "1 Hr 55 Min",
    distance: "61 Km",
    image: "https://static.wixstatic.com/media/cef78c_1fd7f19d5f1c44c4a5fdbcb6db696b0f~mv2.png",
    imageWidth: "max-w-[400px]"
  },
  {
    title: "Kasauli",
    drive: "1 Hr 12 Min",
    distance: "44 Km",
    image: "https://static.wixstatic.com/media/cef78c_27a9dd1e0089442a955419f2ce67a19b~mv2.png",
    imageWidth: "max-w-[380px]"
  },
  {
    title: "State Hospital",
    drive: "35 Min",
    distance: "18 Km",
    image: "https://static.wixstatic.com/media/cef78c_356d06f5ca8a4100abf7d628ad39b526~mv2.png",
    imageWidth: "max-w-[450px]"
  },
  {
    title: "Gorkha Fort",
    drive: "8 Min",
    distance: "1.5 Km",
    image: "https://static.wixstatic.com/media/cef78c_4bfe4c6940c34c3e8f7d18a11e239ae5~mv2.png",
    imageWidth: "max-w-[420px]"
  },
  {
    title: "Solan Market",
    drive: "32 Min",
    distance: "17 Km",
    image: "https://static.wixstatic.com/media/cef78c_e18ce2a0a52242bd9c7f4ccd91bd5b28~mv2.png",
    imageWidth: "max-w-[380px]"
  },
  {
    title: "Ashni River",
    drive: "17 Min",
    distance: "8 Km",
    image: "https://static.wixstatic.com/media/cef78c_1d559446e7c646a3a12d513e566bd3c4~mv2.png",
    imageWidth: "max-w-[360px]"
  },
  {
    title: "Kalka \n Railway\n Station",
    drive: "1 Hr 30 Min",
    distance: "60 Km",
    image: "https://static.wixstatic.com/media/cef78c_266c481ced8d4517bd3c0bb27e350732~mv2.png",
    imageWidth: "max-w-[480px]"
  },
];

const SmallPin = () => (
  <div className="w-5 h-5 rounded-full border border-[#F4F1EB] bg-transparent flex items-center justify-center p-1">
    <div className="w-2 h-2 rounded-full bg-[#F4F1EB]"></div>
  </div>
);

const MapSVG = () => (
  <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 15C36.2 15 25 26.2 25 40C25 58.75 50 85 50 85C50 85 75 58.75 75 40C75 26.2 63.8 15 50 15ZM50 49C45 49 41 45 41 40C41 35 45 31 50 31C55 31 59 35 59 40C59 45 55 49 50 49Z" fill="white"/>
  </svg>
)

const CustomPin = () => (
  <svg width="24" height="32" viewBox="0 0 24 32" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.37258 0 0 5.37258 0 12C0 21 12 32 12 32C12 32 24 21 24 12C24 5.37258 18.6274 0 12 0Z" fill="#F4F1EB"/>
    <circle cx="12" cy="12" r="4" fill="#1A1A1A"/>
  </svg>
);

export default function LocationSection() {
  return (
    <section id="location" className="py-24 md:py-32 bg-[#1d1d1f] overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1600px]">
        
        {/* Header Section */}
        <FadeIn>
          <div className="flex flex-col items-center text-center space-y-4 pt-12 pb-24 md:pb-40 max-w-5xl mx-auto">
            <div className="mb-4 text-[#F4F1EB]">
              <MapSVG />
            </div>
            <h2 
              className="text-[#F4F1EB] text-5xl md:text-6xl lg:text-7xl leading-tight"
              style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 300, letterSpacing: '-2px' }}
            >
              Gateway to comfort<br/>& Exploration
            </h2>
            <p className="text-[#F4F1EB]/90 text-lg md:text-xl leading-relaxed mt-12 font-light max-w-4xl mx-auto tracking-wide">
              The Viceroy Estate boasts a prime location that seamlessly connects residents to essential amenities and key destinations. For travelers, easy access to Shimla and Chandigarh airports facilitates seamless journeys to and from major cities and international destinations. Within reach are reputable schools and healthcare facilities and convenience stores, ensuring convenience and peace of mind for families. Additionally, the estate's proximity to temples, shrines and heritage parks offers residents opportunities for spiritual retreats and cultural exploration, enriching their lifestyle with diverse experiences amidst the serene beauty of the Shivalik Hills.
            </p>
          </div>
        </FadeIn>

        {/* Timeline Section */}
        <div className="relative w-full mx-auto px-2 md:px-12">
          {/* Vertical Center Line */}
          <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-[1px] bg-white/30 transform -translate-x-1/2 z-0"></div>

          <div className="flex flex-col space-y-32 md:space-y-0">
            {locations.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div key={index} className={`relative w-full flex flex-col lg:flex-row items-center justify-center lg:h-[450px] ${index > 0 ? "lg:-mt-16" : ""}`}>
                  
                  {/* Pin for Desktop */}
                  <div className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#1d1d1f] py-8 px-2 z-20">
                     <CustomPin />
                  </div>

                   {/* Small Alternative Pins (Just floating near line) */}
                   <div className="hidden lg:flex absolute left-1/2 -bottom-16 transform -translate-x-1/2 bg-[#1d1d1f] py-4 px-2 z-20 opacity-50">
                     <SmallPin />
                  </div>

                  {/* Mobile Line */}
                   {index !== locations.length - 1 && (
                    <div className="lg:hidden absolute left-1/2 bottom-[-80px] w-[1px] h-32 bg-white/30 transform -translate-x-1/2 z-0"></div>
                  )}
                  {/* Mobile Pin */}
                  <div className="lg:hidden absolute left-1/2 top-[-60px] transform -translate-x-1/2 bg-[#1d1d1f] py-4 px-2 z-20">
                     <CustomPin />
                  </div>


                  {/* Split Content structure exactly like image */}
                  <div className={`w-full lg:w-1/2 flex items-center ${isLeft ? 'justify-center lg:justify-end lg:pr-16 xl:pr-32' : 'justify-center lg:justify-start lg:pl-16 xl:pl-32 lg:order-2'}`}>
                    {/* Left/Right Text Content */}
                     <FadeIn delay={0.1}>
                       <div className="flex flex-col text-center lg:text-left">
                          <h3 
                            className={`text-4xl lg:text-5xl xl:text-6xl text-[#F4F1EB] mb-4 whitespace-pre-line leading-tight ${!isLeft ? 'lg:pl-8' : ''}`} 
                            style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 300, letterSpacing: "-1px" }}
                          >
                            {item.title}
                          </h3>
                          <div className={`${!isLeft ? 'lg:pl-8' : ''}`}>
                             {item.drive && (
                              <p className="text-[#F4F1EB] font-bold text-sm lg:text-base tracking-widest mb-1">
                                Drive: {item.drive}
                              </p>
                            )}
                            {item.distance && (
                              <p className="text-[#F4F1EB] font-normal text-sm lg:text-base tracking-widest opacity-90">
                                Distance: {item.distance}
                              </p>
                            )}
                          </div>
                       </div>
                     </FadeIn>
                  </div>

                  <div className={`w-full lg:w-1/2 flex items-center justify-center mt-12 lg:mt-0 ${!isLeft ? 'lg:justify-end lg:pr-16 xl:pr-32 lg:order-1' : 'lg:justify-start lg:pl-16 xl:pl-32'}`}>
                     {/* The Target Image exactly maintaining its shape */}
                     <FadeIn delay={0.2}>
                        <div className={`w-full flex justify-center ${item.imageWidth} shrink-0`}>
                           <Image 
                            src={item.image} 
                            alt={item.title.replace('\n', ' ')} 
                            className="w-full h-auto object-contain shadow-2xl"
                            style={{ 
                              filter: 'drop-shadow(0px 20px 30px rgba(0,0,0,0.5))'
                            }}
                          />
                        </div>
                     </FadeIn>
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
