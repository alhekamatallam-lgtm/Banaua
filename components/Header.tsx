import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon } from './Icons.tsx';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-white/90 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
              <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <img className="h-12 w-auto" src="https://uc3a88e1fde5404293f154900ec4.previews.dropboxusercontent.com/p/thumb/ACzC5nlOwatZrnPV4YT0bkC5gdbgAWZiE2OJHRCzDdLe--wJHMHiUD-hgeRFkCVZkfCSw6EvzJYtJfSMWWSyCsMPC4wlJM5IjznCdKwfJVw9wTPdxhgjFSFaC79i6lqeDtRx-4zynQyzE9WEq5eQJso2HmsccGVcOeWh14NsuIotnJM12jd0JNNNsNQ6wLOzPGH1EoBQ0c9eB2Qv7HV-oYvtqqU-Bk4Tn0fH5U-z1F-hqyNC9BMNck90kUSKnYEYLjihclJShNTN0518qo5qN9wBR4YLf-dCJfL8UMqvx7xnWIZ1fc_VJflAJa5JuWkQ7mMjrP1JeLsPwHI0Lne0r9D6_7t-0LQcViflThZj9M8M5g/p.png" alt="شعار ديزاين.كو" />
              </a>
            </div>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
              <a href="#about" className="text-gray-600 hover:text-brand transition-colors duration-300">من نحن</a>
              <a href="#portfolio" className="text-gray-600 hover:text-brand transition-colors duration-300">أعمالنا</a>
              <a href="#contact" className="text-gray-600 hover:text-brand transition-colors duration-300">تواصل معنا</a>
            </nav>
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-800 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden fixed inset-0 z-40 bg-white transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ paddingTop: '72px' }} // Height of the header
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-8">
          <a href="#about" onClick={handleLinkClick} className="text-2xl text-gray-800 hover:text-brand transition-colors duration-300">من نحن</a>
          <a href="#portfolio" onClick={handleLinkClick} className="text-2xl text-gray-800 hover:text-brand transition-colors duration-300">أعمالنا</a>
          <a href="#contact" onClick={handleLinkClick} className="text-2xl text-gray-800 hover:text-brand transition-colors duration-300">تواصل معنا</a>
        </nav>
      </div>
    </>
  );
};

export default Header;