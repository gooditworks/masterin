"use client";

import { Button } from "@/components/ui/Button";

const services = [
  {
    id: 1,
    title: "Полиграфия офсетной и цифровой печатью",
    image: "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "УФ-печать на ПВХ",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Сальвентная печать на самоклеящейся пленке",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Световые вывески и LED экраны",
    image: "https://images.unsplash.com/photo-1563089145-599997674d42?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    title: "Баннеры любого размера",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    title: "Монтаж альпинистами любой сложности",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
  },
];

function ServiceCard({ title, image }: { title: string; image: string }) {
  return (
    <div className="relative rounded-[30px] md:rounded-[50px] overflow-hidden shadow-[var(--shadow-card)] group h-[230px] md:h-[300px] lg:h-[350px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(30,31,51,0.78)] via-[rgba(30,31,51,0.4)] to-transparent" />
      
      {/* Content */}
      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
        <h3 className="font-[family-name:var(--font-unbounded)] font-medium text-lg md:text-xl text-white max-w-[250px]">
          {title}
        </h3>
        
        <div>
          <Button variant="primary" size="sm">
            Заказать проект
          </Button>
        </div>
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="py-12 md:py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-[1786px] mx-auto">
        {/* Section Title */}
        <h2 className="font-[family-name:var(--font-unbounded)] font-medium text-2xl md:text-4xl text-black text-center mb-10 md:mb-16">
          НАШИ УСЛУГИ
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              image={service.image}
            />
          ))}
        </div>

        {/* More Services Button */}
        <div className="flex justify-center mt-10 md:mt-16">
          <Button variant="primary" size="lg">
            Больше услуг
          </Button>
        </div>
      </div>
    </section>
  );
}

