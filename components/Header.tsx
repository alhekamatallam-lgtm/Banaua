import React from 'react';

interface HeaderProps {
  logoUrl: string | null;
}

const Header: React.FC<HeaderProps> = ({ logoUrl }) => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-center md:justify-start">
          {logoUrl ? (
            <a href="#">
              <img className="h-16 w-auto" src={logoUrl} alt="شعار شركة ديكور" />
            </a>
          ) : (
             <a href="#" className="text-2xl font-bold text-brand">شركة ديكور</a>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;