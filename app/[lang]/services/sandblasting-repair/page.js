// app/[lang]/services/sandblasting-repair/page.js

import Image from "next/image";
import { getDictionary } from "@/lib/dictionaries"; // 1. Импортируем

// Иконка "Галочка"
const CheckIcon = () => (
  <svg
    className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
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

// Иконка "Внимание"
const WarningIcon = () => (
  <svg
    className="w-6 h-6 text-yellow-500 mr-3 flex-shrink-0"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.742-2.98l5.58-9.92zM10 13a1 1 0 110-2 1 1 0 010 2zm-1-4a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
      clipRule="evenodd"
    ></path>
  </svg>
);

// Metadata (пока статичная)
export const metadata = {
  title: "Ремонт пескоструйных аппаратов - ТехСнаб",
  description:
    "Профессиональный ремонт и обслуживание пескоструйных (абразивоструйных) аппаратов.",
};

// 2. 'params' здесь все еще Promise
export default async function SandblastingRepairPage({ params }) {
  // 3. ИСПРАВЛЕНИЕ: "Разворачиваем" Promise с помощью 'await'
  const resolvedParams = await params;
  const lang = resolvedParams.lang;

  // 4. Теперь 'lang' определен, и мы можем
  //    безопасно получить словарь
  const dictionary = await getDictionary(lang);
  const t = dictionary.sandblasting_page; // 't' для текстов страницы
  const b = dictionary.breadcrumbs; // 'b' для хлебных крошек

  return (
    <div className="space-y-8">
      {/* Блок 1: Хлебные крошки и Заголовок (5. Используем словарь) */}
      <div>
        <div className="text-sm text-gray-500 mb-2">
          <span>{b.main}</span>
          <span className="mx-2">/</span>
          <span>{b.services}</span>
          <span className="mx-2">/</span>
          <span className="text-gray-700">{b.sandblasting}</span>
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
          {t.title}
        </h1>
      </div>

      {/* Блок 2: Картинки (без изменений) */}
      <div className="flex flex-col lg:flex-row gap-4 w-full max-w-5xl mx-auto">
        <div className="w-full lg:w-2/3">
          <Image
            src="/sandblasting-main.png"
            alt="Ремонт пескоструйного аппарата"
            width={800}
            height={450}
            className="rounded-lg w-full h-full object-cover"
            priority
          />
        </div>
        <div className="w-full lg:w-1/3 flex flex-col gap-4">
          <Image
            src="/sandblasting-side-top.png"
            alt="Пескоструйное сопло"
            width={400}
            height={225}
            className="rounded-lg w-full h-auto object-cover"
            priority
          />
          <Image
            src="/sandblasting-side-bottom.png"
            alt="Пескоструйный аппарат в сборе"
            width={400}
            height={225}
            className="rounded-lg w-full h-auto object-cover"
            priority
          />
        </div>
      </div>

      {/* Блок 3: Вступление */}
      <p className="text-lg text-gray-700 leading-relaxed">{t.intro}</p>

      {/* Блок 4: Список услуг */}
      <div className="p-6 md:p-8 bg-white rounded-lg border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          {t.repair_title}
        </h2>
        <ul className="space-y-4">
          {/* 6. Используем цикл для списка */}
          {t.repair_list.map((item, index) => (
            <li key={index} className="flex items-start text-lg">
              <CheckIcon />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Блок 5: Важно знать */}
      <div className="p-6 md:p-8 bg-yellow-50 rounded-lg border border-yellow-200">
        <div className="flex items-start">
          <WarningIcon />
          <div>
            <h2 className="text-2xl font-semibold text-yellow-800 mb-2">
              {t.warning_title}
            </h2>
            <p className="text-lg text-yellow-700 leading-relaxed">
              {t.warning_text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
