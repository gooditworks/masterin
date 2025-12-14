"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { MenuIcon, CloseIcon } from "@/components/icons";
import { useContactModal } from "@/components/ui/ContactModalContext";

const navLinks = [
  { href: "https://master-in.ru/about/", label: "О нас" },
  { href: "https://master-in.ru/directions/", label: "Направления" },
  { href: "https://master-in.ru/news/", label: "Медиацентр" },
  { href: "https://master-in.ru/contacts/", label: "Контакты" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openContactModal } = useContactModal();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8 lg:px-16">
      <div className="max-w-[1786px] mx-auto">
        <nav className="bg-white rounded-[30px] xl:rounded-[50px] shadow-[var(--shadow-card)] px-4 py-2 md:px-6 xl:px-8 md:py-3 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/images/logo.png"
              alt="MASTER IN медиагруппа"
              width={200}
              height={90}
              className="h-16 md:h-[72px] xl:h-[90px] w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-[family-name:var(--font-inter)] font-light text-base text-black hover:text-[var(--color-primary-blue)] transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Phone & CTA */}
          <div className="hidden xl:flex items-center gap-4 shrink-0">
            <a
              href="tel:+74952550607"
              className="font-[family-name:var(--font-unbounded)] font-extrabold text-sm xl:text-base text-black hover:text-[var(--color-primary-blue)] transition-colors whitespace-nowrap"
            >
              8 (495) 255-06-07
            </a>
            <Button variant="secondary" size="sm" onClick={openContactModal}>
              Связаться с нами
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="xl:hidden p-2 rounded-lg bg-[var(--color-secondary)] text-black hover:bg-[var(--color-gray)] transition-colors"
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            {isMenuOpen ? (
              <CloseIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="xl:hidden absolute left-4 right-4 md:left-8 md:right-auto top-20 md:top-24 bg-white rounded-[30px] shadow-[var(--shadow-card)] p-6 md:p-8 animate-fade-in md:w-[280px]">
            {/* Mobile Logo */}
            <div className="mb-6">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                <Image
                  src="/images/logo.png"
                  alt="MASTER IN медиагруппа"
                  width={160}
                  height={72}
                  className="h-14 w-auto"
                />
              </Link>
            </div>
            
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-[family-name:var(--font-inter)] font-light text-base text-black hover:text-[var(--color-primary-blue)] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+74952550607"
                className="font-[family-name:var(--font-unbounded)] font-extrabold text-base text-black mt-2"
              >
                8 (495) 255-06-07
              </a>
              <Button variant="secondary" size="sm" className="w-full mt-2" onClick={() => { setIsMenuOpen(false); openContactModal(); }}>
                Связаться с нами
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

