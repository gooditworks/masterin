import { Button } from "@/components/ui/Button";
import { ArrowRightCircleIcon } from "@/components/icons";

export function Advantages() {
  return (
    <section className="py-12 md:py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-[1786px] mx-auto">
        {/* Section Title */}
        <h2 className="font-[family-name:var(--font-unbounded)] font-bold text-2xl md:text-4xl text-black text-center mb-10 md:mb-16 uppercase">
          Преимущества работы с нами
        </h2>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Advantage 1: Speed */}
          <div className="bg-[var(--color-secondary)] rounded-[30px] md:rounded-[50px] p-6 md:p-10 shadow-[var(--shadow-card)] relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="font-[family-name:var(--font-unbounded)] font-bold text-xl md:text-2xl text-black mb-4">
                От макета до монтажа за 48 часов
              </h3>
              <p className="font-[family-name:var(--font-inter)] font-light text-base md:text-lg text-black mb-6 max-w-md">
                Подготовим макет, распечатаем и проведём монтаж за сутки:
                утром макет – вечером готовый объект
              </p>
              <Button variant="primary" size="md">
                Заказать проект
              </Button>
            </div>
            
            {/* Visual: Timer card */}
            <div className="mt-6 lg:absolute lg:right-8 lg:bottom-8 lg:mt-0">
              <div className="bg-white rounded-[30px] md:rounded-[50px] shadow-[var(--shadow-card)] p-6 inline-block">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="font-[family-name:var(--font-inter)] font-light text-sm text-black">От дизайна</span>
                    <ArrowRightCircleIcon className="w-5 h-5 text-[var(--color-primary-blue)]" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-[family-name:var(--font-inter)] font-light text-sm text-black">печати</span>
                    <ArrowRightCircleIcon className="w-5 h-5 text-[var(--color-primary-blue)]" />
                  </div>
                  <span className="font-[family-name:var(--font-inter)] font-light text-sm text-black">монтажа</span>
                </div>
                <p className="font-[family-name:var(--font-unbounded)] font-bold text-2xl md:text-3xl text-[var(--color-primary-blue)] text-center mt-2">
                  48 часов
                </p>
              </div>
            </div>
          </div>

          {/* Advantage 2: Geography */}
          <div className="bg-[var(--color-secondary)] rounded-[30px] md:rounded-[50px] p-6 md:p-10 shadow-[var(--shadow-card)]">
            <h3 className="font-[family-name:var(--font-unbounded)] font-bold text-xl md:text-2xl text-black mb-2">
              Работаем в 97+
              <br />
              городах России
            </h3>
            <p className="font-[family-name:var(--font-inter)] font-light text-base md:text-lg text-black mb-4">
              Доставка и монтаж по всей России собственными бригадами
            </p>
            <p className="font-[family-name:var(--font-inter)] font-light text-sm text-[var(--color-text-muted)] mb-6">
              *Узнать сроки доставки
            </p>
            <Button variant="primary" size="md">
              Оформить заказ
            </Button>
            
            {/* Map placeholder */}
            <div className="mt-6 bg-[var(--color-primary-blue)] bg-opacity-10 rounded-[20px] h-40 flex items-center justify-center">
              <span className="text-4xl">🗺️</span>
            </div>
          </div>

          {/* Advantage 3: Materials */}
          <div className="lg:col-span-2 bg-[var(--color-secondary)] rounded-[30px] md:rounded-[50px] p-6 md:p-10 shadow-[var(--shadow-card)]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="font-[family-name:var(--font-unbounded)] font-bold text-xl md:text-2xl text-black mb-2">
                  200+ материалов
                  <br />
                  в наличии
                </h3>
                <p className="font-[family-name:var(--font-inter)] font-light text-base md:text-lg text-black mb-6 max-w-md">
                  Высокое качество печати и множество материалов, которые позволяют нам подобрать решение под любую задачу
                </p>
                <Button variant="primary" size="md">
                  Подобрать материалы
                </Button>
              </div>
              
              {/* Materials image placeholder */}
              <div className="bg-white rounded-[20px] md:rounded-[30px] h-60 flex items-center justify-center overflow-hidden">
                <div className="text-6xl">🎨</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

