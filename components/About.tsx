import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">عن شركتنا</h2>
          <div className="w-24 h-1 bg-brand mx-auto mt-2"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img src="https://picsum.photos/600/400?random=2" alt="مكتب عصري" className="rounded-lg shadow-xl w-full" />
          </div>
          <div className="md:w-1/2 text-lg text-gray-600 leading-relaxed">
            <p className="mb-4">
              نحن في ديزاين.كو نؤمن بأن التصميم الجيد هو الذي يجمع بين الجمال والوظيفة. فريقنا من المصممين المبدعين متخصص في ابتكار مساحات فريدة تعكس شخصية عملائنا وتلبي احتياجاتهم العملية.
            </p>
            <p>
              منذ تأسيسنا، عملنا على مجموعة متنوعة من المشاريع، من الشقق السكنية الفاخرة إلى المكاتب التجارية الحديثة، ملتزمين بتقديم أعلى مستويات الجودة والاهتمام بأدق التفاصيل في كل خطوة.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;