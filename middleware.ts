import { NextResponse } from 'next/server';
import { NextAuthRequest } from 'next-auth/lib';
import { authRoutes, publicRoutes, DEFAULT_LOGIN_REDIRECT } from './route';
import { auth } from '@/auth';

export default auth((req: NextAuthRequest) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  console.log(req.auth); // Always null...
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  // ルートページにアクセスした場合のリダイレクトを追加
  if (nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
  }

  if (isAuthRoute && isLoggedIn) {
    // 認証ルートにアクセスしていて、ログイン済みの場合はdashboard画面へredirect
    return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
  }
  if (!isLoggedIn && !isPublicRoute) {
    // ログインしてなくて、公開ルート以外にアクセスした場合はsignUp画面へredirect
    return NextResponse.redirect(new URL('/signUp', nextUrl));
  }

  return NextResponse.next();
});

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
