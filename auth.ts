import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import bcrypt from 'bcrypt';
import prisma from './app/lib/prisma';

async function getUser(email: string) {
    try {
      const user = await prisma.user.findUnique({
        where: {
            email: email,
        }
      });
      return user;
    } catch (error) {
      console.error('Failed to fetch user:', error);
      throw new Error('Failed to fetch user.');
    }
  }
 
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
        async authorize(credentials) {
            const parsedCredentials = z
            .object({email: z.string().email(), password: z.string().min(2)})
            .safeParse(credentials);

            if(parsedCredentials.success){
                const {email, password} = parsedCredentials.data;
                const user = await getUser(email);
                if(!user)return null;
                const passwordsMatch = await bcrypt.compare(password, user.hashedpassword);
                if(passwordsMatch) return user;
            }
            console.log('Invalid credentials');
            return null;
        },
  })],
});