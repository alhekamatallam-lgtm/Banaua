import React from 'react';

const App: React.FC = () => {
  return (
    <div className="bg-gray-100 text-gray-800 flex items-center justify-center min-h-screen" dir="rtl">
      <div className="text-center p-10 bg-white rounded-lg shadow-2xl max-w-md mx-auto transform transition-all hover:scale-105 duration-300">
        <svg className="mx-auto h-16 w-16 text-brand mb-4 animate-spin-slow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <h1 className="text-4xl font-bold text-brand mb-2">الموقع تحت الإنشاء</h1>
        <p className="text-lg text-gray-600">
          نحن نعمل بجد لإطلاق موقعنا الجديد قريبًا. شكرًا لصبركم!
        </p>
      </div>
       <style>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default App;
