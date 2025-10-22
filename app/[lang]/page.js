// app/[lang]/page.js

import Image from "next/image";
import { getDictionary } from "@/lib/dictionaries";

// Иконка "Галочка"
const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    ></path>
  </svg>
);
// Иконка "Крестик"
const CrossIcon = () => (
  <svg
    className="w-5 h-5 text-red-500 mr-2 flex-shrink-0"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
      clipRule="evenodd"
    ></path>
  </svg>
);

// 1. 'params' здесь все еще Promise
export default async function Home({ params }) {
  // 2. ИСПРАВЛЕНИЕ: "Разворачиваем" Promise с помощью 'await'
  const resolvedParams = await params;
  const lang = resolvedParams.lang;

  // 3. Теперь 'lang' определен, и мы можем
  //    безопасно получить словарь
  const dictionary = await getDictionary(lang);
  const t = dictionary.home_page; // 't' для текстов страницы
  const b = dictionary.breadcrumbs; // 'b' для хлебных крошек

  return (
    <div className="space-y-8">
      {/* Блок 1: Хлебные крошки и Заголовок */}
      <div>
        <div className="text-sm text-gray-500 mb-2">
          {/* 4. Используем словарь */}
          <span>{b.main}</span>
          <span className="mx-2">/</span>
          <span className="text-gray-700">{b.painting}</span>
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
          {t.title}
        </h1>
      </div>

      {/* Блок 2: Картинки (без изменений) */}
      <div className="flex flex-col lg:flex-row gap-4 w-full max-w-5xl mx-auto">
        <div className="w-full lg:w-2/3">
          <Image
            src="/main-banner.png"
            alt="Ремонт окрасочных аппаратов баннер"
            width={800}
            height={450}
            className="rounded-lg w-full h-full object-cover"
            priority
          />
        </div>
        <div className="w-full lg:w-1/3 flex flex-col gap-4">
          <Image
            src="/main-side-top.png"
            alt="Детали оборудования"
            width={400}
            height={225}
            className="rounded-lg w-full h-auto object-cover"
            priority
          />
          <Image
            src="/main-side-bottom.png"
            alt="Мастер за работой"
            width={400}
            height={225}
            className="rounded-lg w-full h-auto object-cover"
            priority
          />
        </div>
      </div>

      {/* БЛОК 3: КОНТЕНТ (4. Используем словарь) */}
      <div className="text-lg text-gray-700 leading-relaxed space-y-6">
        <p>{t.intro}</p>

        {/* Секция "Услуги" */}
        <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            {t.services_title}
          </h2>
          <ul className="space-y-2">
            {/* 5. Используем цикл для списка */}
            {t.services_list.map((item, index) => (
              <li key={index} className="flex items-center">
                <CheckIcon /> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Промежуточные параграфы */}
        <p>{t.workshop_intro}</p>
        <p>{t.warranty_intro_1}</p>
        <p>{t.warranty_intro_2}</p>

        {/* Секция "Гарантия не..." */}
        <div className="p-6 bg-red-50 rounded-lg border border-red-200">
          <h2 className="text-2xl font-semibold text-red-800 mb-4">
            {t.warranty_void_title}
          </h2>
          <ul className="space-y-2">
            {t.warranty_void_list.map((item, index) => (
              <li key={index} className="flex items-start">
                <CrossIcon /> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Секция "Рекомендация" */}
        <div className="p-6 bg-gray-100 rounded-lg border border-gray-200">
          <p>{t.recommendation}</p>
        </div>

        {/* Заключение */}
        <div className="space-y-2 pt-4">
          <p className="text-xl font-bold text-gray-900">{t.outro_1}</p>
          <p className="text-xl font-bold text-gray-900">{t.outro_2}</p>
        </div>
      </div>
    </div>
  );
}
