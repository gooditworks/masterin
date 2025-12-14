"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

const topicOptions = [
  { value: "", label: "Выберите тему обращения" },
  { value: "cooperation", label: "Предложение сотрудничества" },
  { value: "advertising", label: "Вопрос о размещении рекламы" },
  { value: "office", label: "Вопрос о расположении офиса" },
  { value: "error", label: "Сообщить об ошибке" },
  { value: "other", label: "Другое" },
];

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
    message: "",
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-12 md:py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-[1786px] mx-auto">
        <div className="gradient-navy-blue rounded-[30px] md:rounded-[50px] p-6 md:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Left: Form Info */}
            <div>
              <h2 className="font-[family-name:var(--font-unbounded)] font-bold text-2xl md:text-3xl lg:text-4xl text-white mb-6 leading-tight">
                Оставьте заявку
                <br />
                на консультацию
                <br />
                и получите расчет стоимости
              </h2>
              <p className="font-[family-name:var(--font-inter)] font-light text-base md:text-lg text-white opacity-90 mb-8 max-w-lg">
                Расскажите о ваших задачах, а мы предложим решение, которое
                привлечёт внимание и повысит ваши продажи по оптимальной цене
              </p>

              {/* Consultant Card */}
              <div className="bg-[var(--color-secondary)] rounded-[30px] md:rounded-[50px] p-4 md:p-6 inline-flex items-center gap-4 shadow-[var(--shadow-card)]">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gray-200 flex items-center justify-center text-2xl">
                  👩‍💼
                </div>
                <div>
                  <p className="font-[family-name:var(--font-unbounded)] font-bold text-sm md:text-base text-black">
                    Анита Клименок
                  </p>
                  <p className="font-[family-name:var(--font-inter)] font-light text-xs md:text-sm text-black">
                    Руководитель отдела продаж
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Ваше Имя*"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-white rounded-[30px] md:rounded-[50px] px-6 py-4 font-[family-name:var(--font-inter)] font-light text-base text-black placeholder-gray-500 outline-none focus:ring-2 focus:ring-[var(--color-primary-blue)]"
                />
                <input
                  type="email"
                  placeholder="Ваш E-mail*"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-white rounded-[30px] md:rounded-[50px] px-6 py-4 font-[family-name:var(--font-inter)] font-light text-base text-black placeholder-gray-500 outline-none focus:ring-2 focus:ring-[var(--color-primary-blue)]"
                />
                <select
                  value={formData.topic}
                  onChange={(e) =>
                    setFormData({ ...formData, topic: e.target.value })
                  }
                  className="w-full bg-white rounded-[30px] md:rounded-[50px] px-6 py-4 font-[family-name:var(--font-inter)] font-light text-base text-black outline-none focus:ring-2 focus:ring-[var(--color-primary-blue)] cursor-pointer appearance-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23666'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 1.5rem center",
                    backgroundSize: "1.5rem",
                  }}
                >
                  {topicOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <textarea
                  placeholder="Ваше сообщение"
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-white rounded-[20px] md:rounded-[30px] px-6 py-4 font-[family-name:var(--font-inter)] font-light text-base text-black placeholder-gray-500 outline-none focus:ring-2 focus:ring-[var(--color-primary-blue)] resize-none"
                />

                {/* Consent Checkbox */}
                <div className="flex items-start gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="consent"
                    required
                    checked={formData.consent}
                    onChange={(e) =>
                      setFormData({ ...formData, consent: e.target.checked })
                    }
                    className="mt-1 w-5 h-5 rounded bg-gray-200 border-none cursor-pointer accent-[var(--color-primary-blue)]"
                  />
                  <label
                    htmlFor="consent"
                    className="font-[family-name:var(--font-inter)] font-light text-sm text-white opacity-90 cursor-pointer"
                  >
                    Даю согласие на{" "}
                    <a
                      href="https://master-in.ru/privacy/"
                      className="underline hover:text-[var(--color-primary-blue)]"
                    >
                      обработку персональных данных
                    </a>
                  </label>
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full md:w-auto"
                  >
                    Отправить заявку
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
