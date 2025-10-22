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

// 1. Компонент теперь принимает 'dictionary' и 'lang'
export default function Header({ dictionary, lang }) {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center flex-wrap gap-4">
        {/* Блок 1: Логотип */}
        <div className="flex-shrink-0">
          {/* 2. Используем 'lang' в ссылке */}
          <Link
            href={`/${lang}`}
            className="text-2xl font-bold text-gray-800 hover:text-purple-700"
          >
            {/* 3. Используем 'dictionary' для текста */}
            {dictionary.logo}
          </Link>
        </div>

        {/* Блок 2: Меню и Контакты */}
        <div className="flex items-center flex-wrap justify-end gap-x-6 gap-y-2">
          {/* Навигация */}
          <div className="flex items-center space-x-6">
            {/* ВЫПАДАЮЩЕЕ МЕНЮ "УСЛУГИ" */}
            <div className="relative group py-2 my-[-0.5rem]">
              <Link
                href={`/${lang}/services`}
                className="text-lg text-gray-600 hover:text-black font-medium flex items-center"
              >
                {dictionary.services} {/* 3. Используем 'dictionary' */}
                <ChevronDownIcon />
              </Link>
              <div
                className="absolute hidden group-hover:block bg-white shadow-lg rounded-md 
                           border border-gray-200 z-10 w-max pt-2"
              >
                <Link
                  href={`/${lang}`} // 2. Используем 'lang'
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-500 hover:text-white transition-colors"
                >
                  {dictionary.services_dropdown.painting}{" "}
                  {/* 3. Используем 'dictionary' */}
                </Link>
                <Link
                  href={`/${lang}/services/sandblasting-repair`} // 2. Используем 'lang'
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-500 hover:text-white transition-colors"
                >
                  {dictionary.services_dropdown.sandblasting}{" "}
                  {/* 3. Используем 'dictionary' */}
                </Link>
              </div>
            </div>

            <Link
              href={`/${lang}/contacts`}
              className="text-lg text-gray-600 hover:text-black font-medium"
            >
              {dictionary.contacts} {/* 3. Используем 'dictionary' */}
            </Link>
          </div>

          {/* 4. Передаем 'lang' в переключатель */}
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
