// lib/dictionaries.js

import "server-only"; // Говорит Next.js, что этот код не для браузера

// Импортируем наши словари
import ru from "@/dictionaries/ru.json";
import en from "@/dictionaries/en.json";

// Создаем "карту" (map) словарей
const dictionaries = {
  ru: ru,
  en: en,
};

// Создаем и экспортируем функцию, которая будет
// доставать нужный словарь по коду языка (locale)
export const getDictionary = (locale) => {
  // Если 'locale' это 'en', вернем en.
  // Иначе (или если 'locale' не 'en'), вернем 'ru'
  return dictionaries[locale] ?? dictionaries.ru;
};
