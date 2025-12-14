"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@/components/icons";

const faqItems = [
  {
    id: 1,
    question:
      "Чем цифровая печать отличается от офсетной и какие преимущества дает прямая цифровая печать в типографии?",
    answer:
      "Цифровая печать — это современный способ изготовления продукции без долгой подготовки форм, в отличие от офсетной печати. Благодаря этому возможна прямая цифровая печать даже в малых тиражах и с индивидуальными изменениями в каждом экземпляре. Цифровая печать востребована при срочном изготовлении визиток, буклетов, каталогов и другой продукции.",
  },
  {
    id: 2,
    question: "Что лучше выбрать для рекламы — неоновую вывеску или световой короб?",
    answer:
      "Выбор зависит от целей и бюджета. Неоновые вывески создают уникальный ретро-эффект и привлекают внимание, но требуют более сложного обслуживания. Световые короба более практичны, долговечны и универсальны для различных условий эксплуатации.",
  },
  {
    id: 3,
    question: "Что такое УФ-печать и в каких случаях она используется?",
    answer:
      "УФ-печать — это технология печати с использованием ультрафиолетового отверждения чернил. Она позволяет печатать на любых поверхностях: пластике, стекле, металле, дереве. Идеально подходит для наружной рекламы благодаря устойчивости к выцветанию.",
  },
  {
    id: 4,
    question: "Зачем печатать баннеры и как они помогают бизнесу?",
    answer:
      "Баннеры — это эффективный и экономичный способ привлечь внимание к вашему бизнесу. Они работают 24/7, привлекают проходящих клиентов и создают узнаваемость бренда. Современные материалы обеспечивают долговечность даже в сложных погодных условиях.",
  },
  {
    id: 5,
    question: "Для чего используется печать на самоклеящейся пленке и какие у нее преимущества?",
    answer:
      "Самоклеящаяся пленка — универсальный материал для оформления витрин, транспорта, интерьеров. Преимущества: легкость монтажа, возможность замены, широкий выбор текстур и эффектов (матовая, глянцевая, перфорированная).",
  },
  {
    id: 6,
    question: "Что такое POSM и чем отличается рекламный шелфтокер от других материалов для продвижения?",
    answer:
      "POSM (Point of Sale Materials) — это рекламные материалы в местах продаж. Шелфтокер — это небольшой рекламный элемент на полке магазина, привлекающий внимание к конкретному товару. В отличие от других POSM, он работает непосредственно в момент принятия решения о покупке.",
  },
  {
    id: 7,
    question: "Как проходит изготовление и монтаж вывесок, и почему важно доверять это профессионалам?",
    answer:
      "Процесс включает проектирование, согласование с властями, изготовление и монтаж. Профессионалы обеспечивают соблюдение всех норм безопасности, качественное электрическое подключение и гарантию на работы. Самостоятельный монтаж может привести к штрафам и аварийным ситуациям.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="bg-white rounded-[30px] md:rounded-[50px] shadow-[var(--shadow-card)] overflow-hidden">
      <button
        onClick={onClick}
        className="w-full flex items-start justify-between gap-4 p-6 md:p-8 text-left cursor-pointer"
      >
        <h3 className="font-[family-name:var(--font-unbounded)] font-bold text-sm md:text-lg text-black pr-4">
          {question}
        </h3>
        <ChevronDownIcon
          className={`w-6 h-6 md:w-8 md:h-8 flex-shrink-0 text-[var(--color-primary-blue)] transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      
      {isOpen && (
        <div className="px-6 md:px-8 pb-6 md:pb-8 -mt-2">
          <p className="font-[family-name:var(--font-inter)] font-light text-sm md:text-base text-black">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

export function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <section className="py-12 md:py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-[1786px] mx-auto">
        {/* Section Title */}
        <h2 className="font-[family-name:var(--font-unbounded)] font-bold text-2xl md:text-4xl text-black text-center mb-10 md:mb-16 uppercase">
          Часто задаваемые
          <br />
          вопросы
        </h2>

        {/* FAQ Items */}
        <div className="flex flex-col gap-4 md:gap-6">
          {faqItems.map((item) => (
            <FAQItem
              key={item.id}
              question={item.question}
              answer={item.answer}
              isOpen={openId === item.id}
              onClick={() => setOpenId(openId === item.id ? null : item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

