export const DEFAULT_LOGIN_REDIRECT: string = '/dashboard';

export const authRoutes: string[] = ['/signUp', '/signIn'];

export const publicRoutes: string[] = [...authRoutes, DEFAULT_LOGIN_REDIRECT];
