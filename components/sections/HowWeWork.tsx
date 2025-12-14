const steps = [
  {
    number: 1,
    title: "Консультация и расчёт стоимости",
    description:
      "Выезд, общая оценка проекта и расчёт стоимости. Определяемся с вашими требованиями: вывеска/баннер/цифровая или УФ-печать/самоклейка POSM), размеры, адрес, сроки и макет",
  },
  {
    number: 2,
    title: "Первичный макет",
    description:
      "Делаем макет/адаптируем ваш, визуализируем на фото фасада/интерьера, учитываем требования ТЦ/УК.",
  },
  {
    number: 3,
    title: "Процесс изготовления",
    description:
      "Производим подготовку материалов, печать (цифровая/УФ), плоттерная резка, фрезеровка, сборка. Проводим контроль качества: цветопроба, проверка электрики/подсветки, соответствие размерам и тех.заданию",
  },
  {
    number: 4,
    title: "Доставка на объект и монтаж",
    description:
      "Подъём и такелаж, монтаж по проекту, подключение и пусконаладка. Соблюдаем технику безопасности и фасадные регламенты, работаем в согласованные сроки",
  },
  {
    number: 5,
    title: "Поддержка и гарантийное обслуживание",
    description:
      "Предлагаем гарантию на изделия и монтаж по договору (6–12 месяцев, зависит от типа конструкции и условий эксплуатации)",
  },
];

function ProcessStep({
  number,
  title,
  description,
}: {
  number: number;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-[30px] md:rounded-[50px] shadow-[var(--shadow-card)] p-6 md:p-8 relative overflow-hidden">
      {/* Large Number Watermark */}
      <span className="absolute top-2 left-4 md:left-8 font-[family-name:var(--font-unbounded)] font-bold text-[80px] md:text-[120px] lg:text-[180px] text-[var(--color-secondary)] leading-none select-none pointer-events-none">
        {number}
      </span>

      {/* Content */}
      <div className="relative z-10 pl-0 md:pl-24 lg:pl-32">
        <h3 className="font-[family-name:var(--font-unbounded)] font-bold text-lg md:text-xl text-black mb-3">
          {title}
        </h3>
        <p className="font-[family-name:var(--font-inter)] font-light text-sm md:text-base text-black">
          {description}
        </p>
      </div>
    </div>
  );
}

export function HowWeWork() {
  return (
    <section className="py-12 md:py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-[1786px] mx-auto">
        {/* Section Title */}
        <h2 className="font-[family-name:var(--font-unbounded)] font-bold text-2xl md:text-4xl text-black text-center mb-10 md:mb-16 uppercase">
          Как мы работаем
        </h2>

        {/* Steps */}
        <div className="flex flex-col gap-4 md:gap-6">
          {steps.map((step) => (
            <ProcessStep
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

