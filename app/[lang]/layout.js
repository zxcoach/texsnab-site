// app/[lang]/layout.js

import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDictionary } from "@/lib/dictionaries";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ТехСнаб - Ремонт оборудования",
  description: "Услуги по ремонту и обслуживанию",
};

export async function generateStaticParams() {
  return [{ lang: "ru" }, { lang: "en" }];
}

// 1. 'params' здесь все еще Promise
export default async function RootLayout({ children, params }) {
  // 2. ИСПРАВЛЕНИЕ: "Разворачиваем" Promise с помощью 'await'
  const resolvedParams = await params;
  const lang = resolvedParams.lang;

  // 3. Теперь 'lang' определен, и мы можем
  //    безопасно получить словарь
  const dictionary = await getDictionary(lang);

  return (
    <html lang={lang}>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header dictionary={dictionary.header} lang={lang} />

          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>

          <Footer dictionary={dictionary.footer} />
        </div>
      </body>
    </html>
  );
}
