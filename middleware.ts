import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import { authRoutes, publicRoutes, DEFAULT_LOGIN_REDIRECT } from './route';
import { NextAuthRequest } from 'next-auth/lib';
import { NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

const { auth } = NextAuth(authConfig);

export default auth((req: NextAuthRequest) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
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
  // return;
});

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
