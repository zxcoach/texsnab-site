// components/Header.js

import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";

// Иконка стрелки
const ChevronDownIcon = () => (
  <svg
    className="w-4 h-4 ml-1 text-gray-500"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    ></path>
  </svg>
);

// 1. Header НЕ нужно делать "use client",
//    мы решим всё через CSS (Tailwind)
export default function Header({ dictionary, lang }) {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      {/* 2. ИСПРАВЛЕНИЕ "КРИВИЗНЫ":
          flex-col (по умолчанию - мобилка, всё в столбик)
          lg:flex-row (на десктопе - в ряд)
          lg:justify-between (на десктопе - раскидать по краям)
      */}
      <nav className="container mx-auto px-4 py-4 flex flex-col lg:flex-row lg:justify-between items-center gap-4">
        {/* Блок 1: Логотип */}
        <div className="flex-shrink-0">
          <Link
            href={`/${lang}`}
            className="text-2xl font-bold text-gray-800 hover:text-purple-700"
          >
            {dictionary.logo}
          </Link>
        </div>

        {/* Блок 2: Меню и Контакты 
            Тоже стакаются (flex-col) и выстраиваются в ряд (lg:flex-row)
        */}
        <div className="flex flex-col lg:flex-row items-center gap-x-6 gap-y-4">
          {/* Навигация */}
          <div className="flex items-center space-x-6">
            {/* ВЫПАДАЮЩЕЕ МЕНЮ "УСЛУГИ" (с фиксом хитбокса) */}
            <div className="relative group py-2 my-[-0.5rem]">
              <Link
                href={`/${lang}/services`}
                className="text-lg text-gray-600 hover:text-black font-medium flex items-center"
              >
                {dictionary.services}
                <ChevronDownIcon />
              </Link>

              {/* 3. ИСПРАВЛЕНИЕ "НАЖАТИЯ":
                  Добавляем 'focus-within:block'.
                  Меню покажется при hover (group-hover)
                  ИЛИ при "нажатии" (focus-within)
              */}
              <div
                className="absolute hidden group-hover:block focus-within:block 
                           bg-white shadow-lg rounded-md 
                           border border-gray-200 z-10 w-max pt-2
                           left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0" // Центрирование на мобилке
              >
                <Link
                  href={`/${lang}`}
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-500 hover:text-white transition-colors"
                >
                  {dictionary.services_dropdown.painting}
                </Link>
                <Link
                  href={`/${lang}/services/sandblasting-repair`}
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-500 hover:text-white transition-colors"
                >
                  {dictionary.services_dropdown.sandblasting}
                </Link>
              </div>
            </div>

            <Link
              href={`/${lang}/contacts`}
              className="text-lg text-gray-600 hover:text-black font-medium"
            >
              {dictionary.contacts}
            </Link>
          </div>

          <LanguageSwitcher lang={lang} />

          {/* Контакты */}
          <div className="flex items-center space-x-4">
            <a
              href="tel:+77015220052"
              className="px-4 py-2 border border-purple-600 text-purple-600 rounded-md text-sm font-medium hover:bg-purple-600 hover:text-white transition-colors"
            >
              +7 (701) 522-00-52
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
