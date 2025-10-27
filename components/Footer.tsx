
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} شركة ديزاين.كو. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
};

export default Footer;
