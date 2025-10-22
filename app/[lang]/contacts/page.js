// app/[lang]/contacts/page.js

import { getDictionary } from "@/lib/dictionaries"; // 1. Импортируем

// Иконки для контактов
const PhoneIcon = () => (
  <svg
    className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);
const EmailIcon = () => (
  <svg
    className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);
const MapIcon = () => (
  <svg
    className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);
const ClockIcon = () => (
  <svg
    className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

// Metadata (пока статичная)
export const metadata = {
  title: "Контакты - ТехСнаб",
  description: "Как с нами связаться: телефон, адрес, email.",
};

// 2. 'params' здесь все еще Promise
export default async function ContactsPage({ params }) {
  // 3. ИСПРАВЛЕНИЕ: "Разворачиваем" Promise с помощью 'await'
  const resolvedParams = await params;
  const lang = resolvedParams.lang;

  // 4. Теперь 'lang' определен, и мы можем
  //    безопасно получить словарь
  const dictionary = await getDictionary(lang);
  const t = dictionary.contacts_page; // 't' для текстов страницы
  const b = dictionary.breadcrumbs; // 'b' для хлебных крошек

  return (
    <div className="space-y-8">
      {/* Блок 1: Хлебные крошки и Заголовок (5. Используем словарь) */}
      <div>
        <div className="text-sm text-gray-500 mb-2">
          <span>{b.main}</span>
          <span className="mx-2">/</span>
          <span className="text-gray-700">{b.contacts}</span>
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
          {t.title}
        </h1>
      </div>

      {/* Блок 2: Вступление */}
      <p className="text-lg text-gray-700 leading-relaxed">{t.intro}</p>

      {/* Блок 3: Список контактов */}
      <div className="p-6 md:p-8 bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="space-y-6">
          {/* Телефон */}
          <div className="flex items-start">
            <PhoneIcon />
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                {t.phone_label}
              </h2>
              <a
                href="tel:+77015220052"
                className="text-lg text-purple-600 hover:underline"
              >
                +7 (701) 522-00-52
              </a>
              <p className="text-sm text-gray-500">{t.phone_subtext}</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start">
            <EmailIcon />
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                {t.email_label}
              </h2>
              <a
                href="mailto:techsnaboffical@gmail.com"
                className="text-lg text-purple-600 hover:underline"
              >
                techsnaboffical@gmail.com
              </a>
              <p className="text-sm text-gray-500">{t.email_subtext}</p>
            </div>
          </div>

          {/* Адрес */}
          <div className="flex items-start">
            <MapIcon />
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                {t.address_label}
              </h2>
              {/* Адрес не меняется от языка, поэтому оставляем его как есть */}
              <p className="text-lg text-gray-800">
                Алматинская обл., г. Алматы, ул. КОЛЬСАЙ, д. 31/8, кв. (офис)
                12.
              </p>
            </div>
          </div>

          {/* Время работы */}
          <div className="flex items-start">
            <ClockIcon />
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                {t.hours_label}
              </h2>
              <p className="text-lg text-gray-800">{t.hours_weekdays}</p>
              <p className="text-lg text-gray-800">{t.hours_weekends}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
