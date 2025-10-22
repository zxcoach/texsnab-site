// components/Footer.js

// 1. Компонент теперь принимает 'dictionary'
export default function Footer({ dictionary }) {
  // Мы не используем 'lang' здесь, так как адрес не меняется,
  // но 'dictionary' нужен для копирайта и лейбла "Адрес:"

  return (
    <footer className="bg-gray-800 text-gray-300 py-8 mt-12">
      <div className="container mx-auto px-4 text-center">
        <p>
          © {new Date().getFullYear()} {dictionary.copyright}
        </p>
        <p className="mt-2 text-sm">
          {/* 2. Используем 'dictionary' для лейбла "Адрес:" */}
          {dictionary.address_label} Алматинская обл., г. Алматы, ул. КОЛЬСАЙ,
          д. 31/8, кв. (офис) 12.
        </p>
      </div>
    </footer>
  );
}
