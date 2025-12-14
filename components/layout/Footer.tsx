"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { useContactModal } from "@/components/ui/ContactModalContext";

const BASE_URL = "https://master-in.ru";

const footerLinks = {
  about: {
    title: "О нас",
    links: [
      { href: `${BASE_URL}/about/`, label: "О компании" },
      { href: `${BASE_URL}/partners/`, label: "Партнерам" },
    ],
  },
  services: {
    title: "Направления",
    links: [
      { href: `${BASE_URL}/directions/`, label: "Медиапланирование и баинг" },
      { href: `${BASE_URL}/directions/`, label: "Реклама на транспорте" },
      { href: `${BASE_URL}/directions/`, label: "Рекламное производство и полиграфия" },
      { href: `${BASE_URL}/directions/`, label: "Рекламный факторинг" },
      { href: `${BASE_URL}/directions/`, label: "Индор-реклама" },
      { href: `${BASE_URL}/directions/`, label: "Оформление торговых пространств" },
      { href: `${BASE_URL}/directions/`, label: "BTL и Event" },
      { href: `${BASE_URL}/directions/`, label: "Инновационное рекламное оборудование" },
    ],
  },
  media: {
    title: "Медиацентр",
    links: [
      { href: `${BASE_URL}/news/`, label: "Новости" },
      { href: `${BASE_URL}/news/`, label: "Пресс-релизы" },
    ],
  },
  contacts: {
    title: "Контакты",
    phone: "8 (495) 255-06-07",
    href: `${BASE_URL}/contacts/`,
  },
};

export function Footer() {
  const { openContactModal } = useContactModal();

  return (
    <footer className="bg-[var(--color-secondary)]">
      <div className="max-w-[1786px] mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-16">
        {/* Logo */}
        <div className="mb-8">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="MASTER IN медиагруппа"
              width={200}
              height={90}
              className="h-16 md:h-20 w-auto"
            />
          </Link>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* About */}
          <div>
            <h4 className="font-[family-name:var(--font-unbounded)] font-extrabold text-lg text-black mb-4">
              {footerLinks.about.title}
            </h4>
            <ul className="space-y-2">
              {footerLinks.about.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-[family-name:var(--font-inter)] font-light text-base text-black hover:text-[var(--color-primary-blue)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-[family-name:var(--font-unbounded)] font-extrabold text-lg text-black mb-4">
              {footerLinks.services.title}
            </h4>
            <ul className="space-y-2">
              {footerLinks.services.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-[family-name:var(--font-inter)] font-light text-base text-black hover:text-[var(--color-primary-blue)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Media */}
          <div>
            <h4 className="font-[family-name:var(--font-unbounded)] font-extrabold text-lg text-black mb-4">
              {footerLinks.media.title}
            </h4>
            <ul className="space-y-2">
              {footerLinks.media.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-[family-name:var(--font-inter)] font-light text-base text-black hover:text-[var(--color-primary-blue)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-[family-name:var(--font-unbounded)] font-extrabold text-lg text-black mb-4">
              {footerLinks.contacts.title}
            </h4>
            <a
              href="tel:+74952550607"
              className="font-[family-name:var(--font-unbounded)] font-extrabold text-base text-black hover:text-[var(--color-primary-blue)] transition-colors block mb-4"
            >
              {footerLinks.contacts.phone}
            </a>
            <Button variant="primary" size="sm" onClick={openContactModal}>
              Связаться с нами
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[var(--color-light-border)]">
        <div className="max-w-[1786px] mx-auto px-4 md:px-8 lg:px-16 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-[family-name:var(--font-inter)] font-light text-sm text-black">
            © 2025 Медиа Группа Мастер Ин
          </p>
          <a
            href="https://master-in.ru/privacy/"
            className="font-[family-name:var(--font-inter)] font-light text-sm text-black underline hover:text-[var(--color-primary-blue)] transition-colors"
          >
            Политика конфиденциальности и обработки персональных данных
          </a>
        </div>
      </div>
    </footer>
  );
}

