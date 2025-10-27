import React, { useState, useEffect } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Portfolio from './components/Portfolio.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';

interface PortfolioItem {
  description: string;
  link: string;
}

interface AppData {
  logoUrl: string;
  portfolioItems: PortfolioItem[];
}

const App: React.FC = () => {
  const [appData, setAppData] = useState<AppData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://script.google.com/macros/s/AKfycbxGBTpusYArLArq4BkiAeV2jRfve539jvHO1ZVcVjW0GBSIvPW4vfmMnFXMZ2eSH-4/exec');
        if (!response.ok) {
          throw new Error('فشل في جلب البيانات من الخادم.');
        }
        const result = await response.json();
        if (result.success && result.data && result.data.logo && result.data.Banaua) {
          setAppData({
            logoUrl: result.data.logo[0].logo,
            portfolioItems: result.data.Banaua,
          });
        } else {
          throw new Error('صيغة البيانات المستلمة غير صالحة.');
        }
      } catch (err: any) {
        setError(err.message);
        console.error("Error fetching app data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-gray-50 text-gray-800">
        <p>جاري تحميل الموقع...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-red-50 text-red-700">
        <p>حدث خطأ: {error}</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 text-gray-800">
      <Header logoUrl={appData?.logoUrl || ''} />
      <main>
        <Hero />
        <About />
        <Portfolio items={appData?.portfolioItems || []} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
