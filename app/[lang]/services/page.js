// app/[lang]/services/page.js

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

// Metadata (пока статичная)
export const metadata = {
  title: "Услуги - ТехСнаб",
  description: "Список услуг по ремонту и обслуживанию оборудования.",
};

// 2. 'params' здесь все еще Promise
export default async function ServicesPage({ params }) {
  // 3. ИСПРАВЛЕНИЕ: "Разворачиваем" Promise с помощью 'await'
  const resolvedParams = await params;
  const lang = resolvedParams.lang;

  // 4. Теперь 'lang' определен, и мы можем
  //    безопасно получить словарь
  const dictionary = await getDictionary(lang);
  const t = dictionary.services_page; // 't' для текстов страницы
  const b = dictionary.breadcrumbs; // 'b' для хлебных крошек

  return (
    <div className="space-y-8">
      {/* Блок 1: Хлебные крошки и Заголовок (5. Используем словарь) */}
      <div>
        <div className="text-sm text-gray-500 mb-2">
          <span>{b.main}</span>
          <span className="mx-2">/</span>
          <span className="text-gray-700">{b.services}</span>
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
          {t.title}
        </h1>
      </div>

      {/* Блок 2: Вступление */}
      <p className="text-lg text-gray-700 leading-relaxed">{t.intro}</p>

      {/* Блок 3: Список услуг (Главный блок) */}
      <div className="p-6 md:p-8 bg-white rounded-lg border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          {t.directions_title}
        </h2>
        <ul className="space-y-4">
          {/* 6. Используем цикл для списка */}
          {t.directions_list.map((item, index) => (
            <li key={index} className="flex items-start text-lg">
              <CheckIcon />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Блок 4: "Почему выбирают нас?" */}
      <div className="p-6 md:p-8 bg-gray-100 rounded-lg border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          {t.why_us_title}
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">{t.why_us_text}</p>
      </div>
    </div>
  );
}
