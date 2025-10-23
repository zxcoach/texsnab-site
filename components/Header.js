// components/Header.js

"use client"; // 1. Делаем компонент клиентским

import { useState } from "react"; // 2. Импортируем 'useState'
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

export default function Header({ dictionary, lang }) {
  // 3. Создаем состояние для меню (по умолчанию 'false' = закрыто)
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
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

        {/* Блок 2: Меню и Контакты */}
        <div className="flex flex-col lg:flex-row items-center gap-x-6 gap-y-4">
          {/* Навигация */}
          <div className="flex items-center space-x-6">
            {/* ВЫПАДАЮЩЕЕ МЕНЮ "УСЛУГИ"
                4. Управляем наведением (onMouse...) для десктопа
            */}
            <div
              className="relative py-2 my-[-0.5rem]"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              {/* 5. Управляем нажатием (onClick) для мобилки */}
              <button
                type="button"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="text-lg text-gray-600 hover:text-black font-medium flex items-center"
              >
                {dictionary.services}
                <ChevronDownIcon />
              </button>

              {/* 6. Показываем меню, если isServicesOpen === true */}
              {isServicesOpen && (
                <div
                  className="absolute bg-white shadow-lg rounded-md 
                             border border-gray-200 z-10 w-max pt-2
                             left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0"
                >
                  {/* Мы также добавили главную ссылку /services сюда,
                      чтобы по ней можно было перейти, если меню открыто. */}
                  <Link
                    href={`/${lang}/services`}
                    onClick={() => setIsServicesOpen(false)} // Закрыть меню при клике
                    className="block px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-purple-500 hover:text-white transition-colors"
                  >
                    Все Услуги (главная)
                  </Link>
                  <Link
                    href={`/${lang}`}
                    onClick={() => setIsServicesOpen(false)} // Закрыть меню при клике
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-500 hover:text-white transition-colors"
                  >
                    {dictionary.services_dropdown.painting}
                  </Link>
                  <Link
                    href={`/${lang}/services/sandblasting-repair`}
                    onClick={() => setIsServicesOpen(false)} // Закрыть меню при клике
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-500 hover:text-white transition-colors"
                  >
                    {dictionary.services_dropdown.sandblasting}
                  </Link>
                </div>
              )}
            </div>

            <Link
              href={`/${lang}/contacts`}
              className="text-lg text-gray-600 hover:text-black font-medium"
            >
              {dictionary.contacts}
            </Link>
          </div>

          <LanguageSwitcher />

          {/* Контакты */}
          <div className="flex items-center space-x-4">
            <a
              href="tel:+77015882425"
              className="px-4 py-2 border border-purple-600 text-purple-600 rounded-md text-sm font-medium hover:bg-purple-600 hover:text-white transition-colors"
            >
              +7 (701) 588-24-25
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
