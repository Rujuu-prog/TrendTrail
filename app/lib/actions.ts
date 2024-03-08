'use server';

import { signIn } from '@/auth';
import { signOut } from '@/auth';
import { createUser } from '@/db/user';
import { AuthError } from 'next-auth';
import { handleError } from './utils';
import { DEFAULT_LOGIN_REDIRECT } from '@/route';
import { NextURL } from 'next/dist/server/web/next-url';
import { redirect } from 'next/navigation';

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
  ) {
    try {
      const email = formData.get('email') as string;
      const password = formData.get('password') as string;
      await signIn('credentials', {email, password, redirectTo: DEFAULT_LOGIN_REDIRECT});
    } catch (error) {
      if (error instanceof AuthError) {
        switch (error.type) {
          case 'CredentialsSignin':
            return 'Invalid credentials.';
          default:
            return 'Something went wrong.';
        }
      }
      throw error;
    }
  }

