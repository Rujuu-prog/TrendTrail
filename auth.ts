import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import prisma from '@/app/lib/prisma';

import { authConfig } from '@/auth.config';
import { getUserByEmail, getUserById } from '@/db/user';

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  basePath: '/api/auth',
  callbacks: {
    authorized({ request, auth }) {
      console.log('Please Remove Me. This is a POC', auth);
      return true;
    },
    async jwt({ token }) {
      if (token.sub) {
        const user = await getUserById(token.sub);
        console.log(user); // ok
        if (user) token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
        session.user.role = token.role;
      }

      return session;
    },
  },

  adapter: PrismaAdapter(prisma),
  ...authConfig,
});
