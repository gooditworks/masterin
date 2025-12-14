"use client";

import { useRef } from "react";

const clients = [
  {
    id: 1,
    name: "Магнит",
    description: "Обеспечение федеральной сети рекламной продукцией в промышленных масштабах",
    logo: "🏪",
  },
  {
    id: 2,
    name: "Пятёрочка",
    description: "Полиграфия и рекламные материалы для федеральной торговой сети",
    logo: "🛒",
  },
  {
    id: 3,
    name: "Обойкин",
    description: "Сложные технические проекты по оклейке зданий. Более 5 лет совместных проектов",
    logo: "🏠",
  },
  {
    id: 4,
    name: "Сбербанк",
    description: "Оформление отделений крупнейшего банка страны.",
    logo: "🏦",
  },
  {
    id: 5,
    name: "Samsung",
    description: "Подготовка и печать рекламных макетов для мирового бренда.",
    logo: "📱",
  },
  {
    id: 6,
    name: "О'кей",
    description: "Комплексное фасадное оформление гипермаркета О'КЕЙ. Более 350 м² в плёнке",
    logo: "🛍️",
  },
  {
    id: 7,
    name: "Lichi",
    description: "Фирменное оформление магазина Lichi.",
    logo: "👗",
  },
];

function ClientCard({
  name,
  description,
  logo,
}: {
  name: string;
  description: string;
  logo: string;
}) {
  return (
    <div className="flex-shrink-0 w-[280px] md:w-[320px] lg:w-[380px] bg-white rounded-[30px] md:rounded-[50px] p-6 md:p-8 shadow-[var(--shadow-card)]">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-full bg-[var(--color-dark-navy)] flex items-center justify-center text-2xl">
          {logo}
        </div>
        <h3 className="font-[family-name:var(--font-unbounded)] font-bold text-lg md:text-xl text-black">
          {name}
        </h3>
      </div>
      <p className="font-[family-name:var(--font-inter)] font-light text-sm md:text-base text-black">
        {description}
      </p>
    </div>
  );
}

export function Clients() {
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
          <h2 className="font-[family-name:var(--font-unbounded)] font-medium text-2xl md:text-4xl text-white text-center mb-10 md:mb-12">
            НАШИ КЛИЕНТЫ
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
              {clients.map((client) => (
                <ClientCard
                  key={client.id}
                  name={client.name}
                  description={client.description}
                  logo={client.logo}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

