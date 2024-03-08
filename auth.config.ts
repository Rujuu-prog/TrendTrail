import type { NextAuthConfig } from 'next-auth';
import { authRoutes } from './route';
 
export const authConfig = {
  pages: {
    signIn: 'signIn',
    newUser: 'signUp',
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;