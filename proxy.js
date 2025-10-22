// proxy.js

import { NextResponse } from "next/server";

const locales = ["ru", "en"];
const defaultLocale = "ru";

// ИСПРАВЛЕНИЕ: Переименовали 'middleware' в 'proxy'
export function proxy(request) {
  const { pathname } = request.nextUrl;

  // 1. Проверяем, есть ли уже язык в пути (например, /ru/contacts)
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return; // Если язык есть, ничего не делаем
  }

  // 2. Если языка нет, перенаправляем на язык по умолчанию (ru)
  // Например, /contacts -> /ru/contacts
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Этот 'matcher' говорит proxy НЕ срабатывать
  // на системные файлы Next.js и на наши картинки в /public
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|main-banner.png|main-side-top.png|main-side-bottom.png|sandblasting-main.png|sandblasting-side-top.png|sandblasting-side-bottom.png).*)",
  ],
};
