// components/LanguageSwitcher.js

"use client";

import { usePathname, useRouter } from "next/navigation";

// 1. Мы больше не передаем 'lang' как prop.
// Компонент сам узнает язык из URL.
export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname(); // Получаем текущий путь (например, /ru/contacts)

  // 2. Определяем текущий язык из URL
  const currentLocale = pathname.split("/")[1]; // "/ru/contacts" -> "ru"

  const handleLanguageChange = (newLocale) => {
    // 3. (ИСПРАВЛЕНИЕ)
    // Убираем старый язык из пути, чтобы получить "чистый" путь
    // "/ru/contacts" -> "/contacts"
    // "/ru" -> ""
    const newPath = pathname.substring(currentLocale.length + 1); // (длина "ru" + 1)

    // 4. Добавляем новый язык и переходим
    // (например, /en + /contacts -> /en/contacts)
    // (например, /en + "" -> /en)
    router.push(`/${newLocale}${newPath}`);
  };

  return (
    <div className="flex items-center space-x-1 text-sm font-medium">
      {/* Кнопка RU */}
      {currentLocale === "ru" ? (
        // Если текущий язык 'ru', делаем его жирным
        <span className="text-black font-bold cursor-default">RU</span>
      ) : (
        // Иначе делаем его кликабельным
        <span
          onClick={() => handleLanguageChange("ru")}
          className="text-gray-400 hover:text-black cursor-pointer"
        >
          RU
        </span>
      )}

      <span className="text-gray-300">/</span>

      {/* Кнопка EN */}
      {currentLocale === "en" ? (
        // Если текущий язык 'en', делаем его жирным
        <span className="text-black font-bold cursor-default">EN</span>
      ) : (
        // Иначе делаем его кликабельным
        <span
          onClick={() => handleLanguageChange("en")}
          className="text-gray-400 hover:text-black cursor-pointer"
        >
          EN
        </span>
      )}
    </div>
  );
}
