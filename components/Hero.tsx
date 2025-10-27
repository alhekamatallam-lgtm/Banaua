
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?random=1')" }}>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 p-6 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">نصمم مساحات تُلهم الحياة</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">نحول رؤيتك إلى واقع ملموس بتصاميم داخلية مبتكرة للمنازل والمكاتب.</p>
        <a href="#portfolio" className="bg-amber-500 text-white font-bold py-3 px-8 rounded-full hover:bg-amber-600 transition-all duration-300 transform hover:scale-105">
          شاهد أعمالنا
        </a>
      </div>
    </section>
  );
};

export default Hero;
