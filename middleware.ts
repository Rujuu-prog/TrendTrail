import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import { authRoutes, publicRoutes, DEFAULT_LOGIN_REDIRECT } from './route';
import { NextAuthRequest } from 'next-auth/lib';
import { NextApiResponse} from 'next';

const {auth} = NextAuth(authConfig);

export default auth((req: NextAuthRequest) => {
  const {nextUrl} = req;
  const isLoggedIn = !!req.auth;
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isAuthRoute) {
    if (isLoggedIn) {
    Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
       return;
    }
    return;
  }
  if (!isLoggedIn && !isPublicRoute) {
    Response.redirect(new URL('/signUp', nextUrl));
     return;
  }

  return;
});


export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};