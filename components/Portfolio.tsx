import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons.tsx';

interface PortfolioItem {
  description: string;
  link: string;
}

interface PortfolioProps {
  items: PortfolioItem[];
}

const Portfolio: React.FC<PortfolioProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    if (items.length === 0) return;
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = useCallback(() => {
    if (items.length === 0) return;
    const isLastSlide = currentIndex === items.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, items.length]);

  useEffect(() => {
    if (items.length > 1) {
      const slideInterval = setInterval(goToNext, 4000);
      return () => clearInterval(slideInterval);
    }
  }, [goToNext, items.length]);

  if (items.length === 0) {
    return (
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-800">نماذج من أعمالنا</h2>
            <div className="w-24 h-1 bg-brand mx-auto mt-2"></div>
            <p className="mt-12 text-gray-600">لا توجد أعمال لعرضها حالياً.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">نماذج من أعمالنا</h2>
          <div className="w-24 h-1 bg-brand mx-auto mt-2"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden rounded-lg shadow-2xl">
            <div className="whitespace-nowrap transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {items.map((item, index) => (
                <div key={index} className="inline-block w-full">
                  <img src={item.link} alt={item.description} className="w-full h-auto object-cover aspect-[4/3]" />
                </div>
              ))}
            </div>
          </div>

          {items.length > 1 && (
            <>
              <button onClick={goToPrevious} aria-label="Previous image" className="absolute top-1/2 -translate-y-1/2 right-3 md:right-5 z-30 flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-full bg-white/60 hover:bg-white/90 transition-colors focus:outline-none focus:ring-2 focus:ring-brand">
                <ChevronRightIcon className="h-6 w-6 text-gray-800" />
              </button>
              <button onClick={goToNext} aria-label="Next image" className="absolute top-1/2 -translate-y-1/2 left-3 md:left-5 z-30 flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-full bg-white/60 hover:bg-white/90 transition-colors focus:outline-none focus:ring-2 focus:ring-brand">
                <ChevronLeftIcon className="h-6 w-6 text-gray-800" />
              </button>

              <div className="flex justify-center mt-4 space-x-2 space-x-reverse">
                {items.map((_, slideIndex) => (
                  <button key={slideIndex} aria-label={`Go to slide ${slideIndex + 1}`} onClick={() => setCurrentIndex(slideIndex)} className={`h-3 w-3 rounded-full transition-colors ${currentIndex === slideIndex ? 'bg-brand' : 'bg-gray-300 hover:bg-gray-400'}`}></button>
                ))}
              </div>
            </>
          )}

          <div className="text-center mt-6 min-h-[3rem]">
            <h3 className="text-2xl font-bold text-gray-800 transition-opacity duration-300" key={currentIndex}>{items[currentIndex].description}</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
