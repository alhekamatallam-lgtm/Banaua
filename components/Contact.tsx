import React from 'react';
import { PhoneIcon, MailIcon, InstagramIcon, FacebookIcon, TwitterIcon, LinkedinIcon } from './Icons.tsx';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">تواصل معنا</h2>
          <p className="text-gray-600 mt-2">نحن هنا لمساعدتك. تواصل معنا لمناقشة مشروعك القادم.</p>
          <div className="w-24 h-1 bg-brand mx-auto mt-4"></div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          <div className="flex items-center gap-4 text-lg">
            <PhoneIcon className="w-8 h-8 text-brand" />
            <span className="font-semibold" dir="ltr">+966 12 345 6789</span>
          </div>
          <div className="flex items-center gap-4 text-lg">
            <MailIcon className="w-8 h-8 text-brand" />
            <span className="font-semibold">info@designco.com</span>
          </div>
        </div>
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold mb-4">تابعنا على</h3>
          <div className="flex justify-center items-center gap-6">
            <a href="#" className="text-gray-500 hover:text-brand transition-colors duration-300"><FacebookIcon className="w-7 h-7" /></a>
            <a href="#" className="text-gray-500 hover:text-brand transition-colors duration-300"><InstagramIcon className="w-7 h-7" /></a>
            <a href="#" className="text-gray-500 hover:text-brand transition-colors duration-300"><TwitterIcon className="w-7 h-7" /></a>
            <a href="#" className="text-gray-500 hover:text-brand transition-colors duration-300"><LinkedinIcon className="w-7 h-7" /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;