import type { NextAuthConfig } from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import bcryptjs from 'bcryptjs';
import { getUserByEmail } from './db/user';
import { User as PrismaUser, Role } from '@prisma/client';

import 'next-auth';

declare module 'next-auth' {
  interface User extends PrismaUser {}
}

import 'next-auth/jwt';

declare module 'next-auth/jwt' {
  interface JWT {
    role: Role;
  }
}

export const authConfig = {
  debug: true,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(2) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          try {
            const user = await getUserByEmail(email);
            if (!user) return null;
            const passwordsMatch = await bcryptjs.compareSync(password, user.hashedpassword);
            if (passwordsMatch) {
              console.log('Valid');
              return user;
            }
          } catch (error) {
            console.log(error);
          }
        }
        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
  pages: {
    signIn: 'signIn',
    newUser: 'signUp',
  },
  jwt: { maxAge: 365 * 24 * 60 * 60 },
  session: { strategy: 'jwt', maxAge: 365 * 24 * 60 * 60 },
} satisfies NextAuthConfig;
