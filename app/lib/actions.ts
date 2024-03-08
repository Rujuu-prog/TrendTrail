'use server';

import { signIn } from '@/auth';
import { signOut } from '@/auth';
import { createUser } from '@/db/user';
import { AuthError } from 'next-auth';
import { DEFAULT_LOGIN_REDIRECT } from '@/route';

export async function authenticate(prevState: string | undefined, formData: FormData) {
  try {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    await signIn('credentials', { email, password, redirectTo: DEFAULT_LOGIN_REDIRECT });
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

export async function signUp(prevState: string | undefined, formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const result = await createUser(name, email, password);
  if (result.isSuccess) {
    // ユーザー作成が成功したら、SignIn処理を行う
    await authenticate(undefined, formData);
  } else {
    return result.error?.message;
  }
}

export async function signOutServerAction() {
  await signOut();
}
