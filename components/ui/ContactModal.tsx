"use client";

import { useState } from "react";
import { Button } from "./Button";
import { CloseIcon } from "@/components/icons";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const topicOptions = [
  { value: "cooperation", label: "Предложение сотрудничества" },
  { value: "advertising", label: "Вопрос о размещении рекламы" },
  { value: "office", label: "Вопрос о расположении офиса" },
  { value: "error", label: "Сообщить об ошибке" },
  { value: "other", label: "Другое" },
];

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "cooperation",
    message: "",
    consent: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setFormData({
      name: "",
      email: "",
      topic: "cooperation",
      message: "",
      consent: false,
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-[100] animate-fade-in"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-[101] flex items-center justify-center p-4">
        <div
          className="bg-white rounded-[30px] shadow-[var(--shadow-card-lg)] w-full max-w-[500px] max-h-[90vh] overflow-y-auto animate-fade-in"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <div className="flex justify-end p-4 pb-0">
            <button
              onClick={handleClose}
              className="p-2 rounded-lg hover:bg-[var(--color-secondary)] transition-colors"
              aria-label="Закрыть"
            >
              <CloseIcon className="w-6 h-6" />
            </button>
          </div>

          {isSubmitted ? (
            /* Success state */
            <div className="p-6 pt-2 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="font-[family-name:var(--font-unbounded)] font-bold text-xl text-black mb-2">
                  Спасибо!
                </h3>
                <p className="font-[family-name:var(--font-inter)] font-light text-base text-black">
                  Ваша заявка принята!
                  <br />В ближайшее время наш менеджер свяжется с вами.
                </p>
              </div>
              <Button variant="primary" size="md" onClick={handleClose}>
                Ок
              </Button>
            </div>
          ) : (
            /* Form state */
            <div className="p-6 pt-2">
              <h2 className="font-[family-name:var(--font-unbounded)] font-bold text-xl md:text-2xl text-black mb-2">
                Задайте ваш вопрос
              </h2>
              <p className="font-[family-name:var(--font-inter)] font-light text-sm text-black mb-6">
                и наши специалисты свяжутся с вами в ближайшее время.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Ваше Имя*"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-[var(--color-secondary)] rounded-[50px] px-5 py-3 font-[family-name:var(--font-inter)] font-light text-base text-black placeholder-gray-500 outline-none focus:ring-2 focus:ring-[var(--color-primary-blue)]"
                />
                <input
                  type="email"
                  placeholder="Ваш E-mail*"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-[var(--color-secondary)] rounded-[50px] px-5 py-3 font-[family-name:var(--font-inter)] font-light text-base text-black placeholder-gray-500 outline-none focus:ring-2 focus:ring-[var(--color-primary-blue)]"
                />
                <select
                  value={formData.topic}
                  onChange={(e) =>
                    setFormData({ ...formData, topic: e.target.value })
                  }
                  className="w-full bg-[var(--color-secondary)] rounded-[50px] px-5 py-3 font-[family-name:var(--font-inter)] font-light text-base text-black outline-none focus:ring-2 focus:ring-[var(--color-primary-blue)] cursor-pointer appearance-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23666'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 1.25rem center",
                    backgroundSize: "1.25rem",
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
                  rows={3}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-[var(--color-secondary)] rounded-[20px] px-5 py-3 font-[family-name:var(--font-inter)] font-light text-base text-black placeholder-gray-500 outline-none focus:ring-2 focus:ring-[var(--color-primary-blue)] resize-none"
                />

                {/* Consent Checkbox */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="modal-consent"
                    required
                    checked={formData.consent}
                    onChange={(e) =>
                      setFormData({ ...formData, consent: e.target.checked })
                    }
                    className="mt-1 w-5 h-5 rounded bg-[var(--color-secondary)] border-none cursor-pointer accent-[var(--color-primary-blue)]"
                  />
                  <label
                    htmlFor="modal-consent"
                    className="font-[family-name:var(--font-inter)] font-light text-sm text-black cursor-pointer"
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

                <Button type="submit" variant="primary" size="md" className="w-full">
                  Отправить заявку
                </Button>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

