import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';

interface PortfolioItem {
  id: number;
  title: string;
  imageUrl: string;
}

const Portfolio: React.FC = () => {
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://script.google.com/macros/s/AKfycbxGBTpusYArLArq4BkiAeV2jRfve539jvHO1ZVcVjW0GBSIvPW4vfmMnFXMZ2eSH-4/exec');
        if (!response.ok) {
          throw new Error('فشل في جلب البيانات من الخادم.');
        }
        const result = await response.json();
        if (result.success && result.data && result.data.Banaua) {
          const formattedData = result.data.Banaua.map((item: any, index: number) => ({
            id: index + 1,
            title: item.description,
            imageUrl: item.link,
          }));
          setPortfolioItems(formattedData);
        } else {
          throw new Error('صيغة البيانات غير صالحة.');
        }
      } catch (err: any) {
        setError(err.message);
        console.error("Error fetching portfolio data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolioData();
  }, []);

  const goToPrevious = () => {
    if (portfolioItems.length === 0) return;
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? portfolioItems.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = useCallback(() => {
    if (portfolioItems.length === 0) return;
    const isLastSlide = currentIndex === portfolioItems.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, portfolioItems.length]);

  useEffect(() => {
    if (portfolioItems.length > 1) {
      const slideInterval = setInterval(goToNext, 4000);
      return () => clearInterval(slideInterval);
    }
  }, [goToNext, portfolioItems.length]);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">نماذج من أعمالنا</h2>
          <div className="w-24 h-1 bg-brand mx-auto mt-2"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative min-h-[400px]">
          {loading && <div className="absolute inset-0 flex items-center justify-center"><p className="text-gray-600">جاري تحميل الأعمال...</p></div>}
          {error && <div className="absolute inset-0 flex items-center justify-center"><p className="text-red-600">حدث خطأ: {error}</p></div>}
          
          {!loading && !error && portfolioItems.length > 0 && (
            <>
              <div className="overflow-hidden rounded-lg shadow-2xl">
                <div className="whitespace-nowrap transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                  {portfolioItems.map((item) => (
                    <div key={item.id} className="inline-block w-full">
                      <img src={item.imageUrl} alt={item.title} className="w-full h-auto object-cover aspect-[4/3]" />
                    </div>
                  ))}
                </div>
              </div>

              {portfolioItems.length > 1 && (
                <>
                  <button onClick={goToPrevious} aria-label="Previous image" className="absolute top-1/2 -translate-y-1/2 right-3 md:right-5 z-30 flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-full bg-white/60 hover:bg-white/90 transition-colors focus:outline-none focus:ring-2 focus:ring-brand">
                    <ChevronRightIcon className="h-6 w-6 text-gray-800" />
                  </button>
                  <button onClick={goToNext} aria-label="Next image" className="absolute top-1/2 -translate-y-1/2 left-3 md:left-5 z-30 flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-full bg-white/60 hover:bg-white/90 transition-colors focus:outline-none focus:ring-2 focus:ring-brand">
                    <ChevronLeftIcon className="h-6 w-6 text-gray-800" />
                  </button>

                  <div className="flex justify-center mt-4 space-x-2 space-x-reverse">
                    {portfolioItems.map((_, slideIndex) => (
                      <button key={slideIndex} aria-label={`Go to slide ${slideIndex + 1}`} onClick={() => setCurrentIndex(slideIndex)} className={`h-3 w-3 rounded-full transition-colors ${currentIndex === slideIndex ? 'bg-brand' : 'bg-gray-300 hover:bg-gray-400'}`}></button>
                    ))}
                  </div>
                </>
              )}

              <div className="text-center mt-6">
                <h3 className="text-2xl font-bold text-gray-800 transition-opacity duration-300" key={currentIndex}>{portfolioItems[currentIndex].title}</h3>
              </div>
            </>
          )}

          {!loading && !error && portfolioItems.length === 0 && (
             <div className="absolute inset-0 flex items-center justify-center"><p className="text-gray-600">لا توجد أعمال لعرضها حالياً.</p></div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;