import type { Metadata } from "next";
import { Unbounded, Inter } from "next/font/google";
import { ContactModalProvider } from "@/components/ui/ContactModalContext";
import "./globals.css";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "МАСТЕР РИТЕЙЛ — Брендирование и оформление торговых пространств",
  description:
    "Мы создаём качественные проекты с полным циклом услуг: от дизайна и печати до профессионального монтажа любой сложности",
  keywords: [
    "брендирование",
    "оформление",
    "торговые пространства",
    "реклама",
    "печать",
    "вывески",
    "монтаж",
  ],
  openGraph: {
    title: "МАСТЕР РИТЕЙЛ — Брендирование и оформление торговых пространств",
    description:
      "Полный цикл услуг: от дизайна и печати до профессионального монтажа любой сложности",
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${unbounded.variable} ${inter.variable} antialiased`}>
        <ContactModalProvider>
          {children}
        </ContactModalProvider>
      </body>
    </html>
  );
}
