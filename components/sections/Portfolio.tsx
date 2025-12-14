"use client";

import { useRef } from "react";

const projects = [
  { id: 1, name: "FAMILIA", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop" },
  { id: 2, name: "ПЯТЕРОЧКА", image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=600&h=400&fit=crop" },
  { id: 3, name: "ВСЕ ИНСТРУМЕНТЫ", image: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=600&h=400&fit=crop" },
  { id: 4, name: "ГАЛАМАРТ", image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=600&h=400&fit=crop" },
  { id: 5, name: "SAMSUNG", image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&h=400&fit=crop" },
  { id: 6, name: "СБЕРБАНК", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop" },
  { id: 7, name: "ОБОЙКИН", image: "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=600&h=400&fit=crop" },
  { id: 8, name: "ОКЕЙ", image: "https://images.unsplash.com/photo-1604357209793-fca5dca89f97?w=600&h=400&fit=crop" },
  { id: 9, name: "IPORT", image: "https://images.unsplash.com/photo-1491933382434-500287f9b54b?w=600&h=400&fit=crop" },
  { id: 10, name: "LEOMALL", image: "https://images.unsplash.com/photo-1567449303078-57ad995bd329?w=600&h=400&fit=crop" },
  { id: 11, name: "LICHI", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop" },
];

function PortfolioCard({ name, image }: { name: string; image: string }) {
  return (
    <div className="flex-shrink-0 w-[250px] md:w-[320px] lg:w-[380px]">
      <div
        className="h-[185px] md:h-[280px] lg:h-[350px] rounded-[30px] md:rounded-[50px] bg-cover bg-center shadow-[var(--shadow-card)]"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="bg-white rounded-[30px] md:rounded-[50px] shadow-[var(--shadow-card)] py-4 px-6 -mt-4 mx-4 relative z-10">
        <p className="font-[family-name:var(--font-unbounded)] font-bold text-sm md:text-base text-black text-center">
          {name}
        </p>
      </div>
    </div>
  );
}

export function Portfolio() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-12 md:py-20">
      <div className="gradient-navy-blue rounded-[30px] md:rounded-[50px] py-12 md:py-16 mx-4 md:mx-8 lg:mx-16">
        <div className="max-w-[1786px] mx-auto px-4 md:px-8">
          {/* Section Title */}
          <h2 className="font-[family-name:var(--font-unbounded)] font-bold text-2xl md:text-4xl text-white text-center mb-10 md:mb-12">
            НАШИ РАБОТЫ
          </h2>

          {/* Carousel */}
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors -ml-2 md:-ml-4"
              aria-label="Предыдущий"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 rotate-180" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" />
              </svg>
            </button>

            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors -mr-2 md:-mr-4"
              aria-label="Следующий"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" />
              </svg>
            </button>

            {/* Scrollable Container */}
            <div
              ref={scrollRef}
              className="flex gap-4 md:gap-6 overflow-x-auto carousel-scroll px-8 md:px-12 py-4"
            >
              {projects.map((project) => (
                <PortfolioCard
                  key={project.id}
                  name={project.name}
                  image={project.image}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

