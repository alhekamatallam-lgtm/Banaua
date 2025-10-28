import React, { useState, useEffect } from 'react';
import Header from './components/Header';

interface LogoData {
  logo: string;
}

const App: React.FC = () => {
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbxGBTpusYArLArq4BkiAeV2jRfve539jvHO1ZVcVjW0GBSIvPW4vfmMnFXMZ2eSH-4/exec');
        if (!response.ok) {
          throw new Error('فشل في جلب البيانات');
        }
        const result = await response.json();
        if (result.success && result.data.logo && result.data.logo.length > 0) {
          const originalUrl = result.data.logo[0].logo;
          // Modify Dropbox URL for direct embedding
          const directUrl = originalUrl.replace('www.dropbox.com', 'dl.dropboxusercontent.com').split('&dl=0')[0];
          setLogoUrl(directUrl);
        } else {
          throw new Error('لم يتم العثور على الشعار في البيانات');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'حدث خطأ غير معروف');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-brand">جاري التحميل...</h2>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-red-50 text-red-700">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">خطأ</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header logoUrl={logoUrl} />
      <main>
        {/* سيتم إضافة باقي مكونات الموقع هنا */}
      </main>
    </div>
  );
};

export default App;