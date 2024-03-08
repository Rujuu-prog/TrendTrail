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

export async function signUp(
    prevState: string | undefined,
    formData: FormData,
){
  try {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const result = await createUser(name, email, password);
    console.log(result)
    if(!result.isSuccess){
      return result.error?.message;
    }
  } catch(error) {
    console.log(error);
    return 'Failed to sign up.';
    // throw error;
  }
    // await signIn('credentials', {email, password,});
    // redirect('http://localhost:3000/dashboard')
}

export async function signOutServerAction() {
  await signOut();
}
