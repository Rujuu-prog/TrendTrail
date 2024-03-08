import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import bcrypt from 'bcrypt';
import prisma from './app/lib/prisma';
import { getUserByEmail } from './db/user';

export const { auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: 'jwt' },
  ...authConfig,
  providers: [
    Credentials({
        async authorize(credentials) {
            const parsedCredentials = z
            .object({email: z.string().email(), password: z.string().min(2)})
            .safeParse(credentials);

            if(parsedCredentials.success){
                const {email, password} = parsedCredentials.data;
                const user = await getUserByEmail(email);
                if(!user)return null;
                const passwordsMatch = await bcrypt.compare(password, user.hashedpassword);
                if(passwordsMatch) return user;
            }
            console.log('Invalid credentials');
            return null;
        },
  })],
});