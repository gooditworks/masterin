"use client";

import { Button } from "@/components/ui/Button";
import { PhoneIcon, LocationIcon, ArrowRightCircleIcon } from "@/components/icons";
import { useContactModal } from "@/components/ui/ContactModalContext";

export function Contacts() {
  const { openContactModal } = useContactModal();

  return (
    <section id="contacts" className="py-12 md:py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-[1786px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Contact Info Card */}
          <div className="bg-white rounded-[30px] md:rounded-[50px] shadow-[var(--shadow-card)] p-6 md:p-10">
            <h2 className="font-[family-name:var(--font-unbounded)] font-bold text-2xl md:text-4xl text-black mb-8 uppercase text-center lg:text-left">
              Контакты
            </h2>

            <div className="space-y-4 mb-8">
              {/* Address */}
              <div className="flex items-start gap-3">
                <LocationIcon className="w-6 h-6 text-[var(--color-primary-blue)] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-[family-name:var(--font-inter)] font-light text-base text-black">
                    Санкт-Петербург
                  </p>
                  <p className="font-[family-name:var(--font-inter)] font-light text-base text-black">
                    ул. Миллионная, д. 6, оф. 104
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-[var(--color-primary-blue)] flex-shrink-0" />
                <a
                  href="tel:+78007555076"
                  className="font-[family-name:var(--font-inter)] font-light text-base text-black hover:text-[var(--color-primary-blue)] transition-colors"
                >
                  8 (800) 755-50-76
                </a>
              </div>

              {/* Requisites */}
              <div className="flex items-center gap-3">
                <ArrowRightCircleIcon className="w-6 h-6 text-[var(--color-primary-blue)] flex-shrink-0 rotate-[-45deg]" />
                <a
                  href="#"
                  className="font-[family-name:var(--font-inter)] font-light text-base text-black hover:text-[var(--color-primary-blue)] transition-colors"
                >
                  Реквизиты
                </a>
              </div>
            </div>

            {/* Email */}
            <p className="font-[family-name:var(--font-inter)] font-light text-base text-black mb-6">
              <a
                href="mailto:zakaz@o-tochka.ru"
                className="hover:text-[var(--color-primary-blue)] transition-colors"
              >
                zakaz@o-tochka.ru
              </a>
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="secondary" size="md">
                Построить маршрут
              </Button>
              <Button variant="primary" size="md" onClick={openContactModal}>
                Связаться с нами
              </Button>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white rounded-[30px] md:rounded-[50px] shadow-[var(--shadow-card)] overflow-hidden min-h-[300px] md:min-h-[400px]">
            <img
              src="/images/map.png"
              alt="Карта: Санкт-Петербург, ул. Миллионная, д. 6"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

