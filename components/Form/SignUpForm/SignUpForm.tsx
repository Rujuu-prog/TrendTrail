'use client';

import {
    TextInput,
    PasswordInput,
    Paper,
    Button,
  } from '@mantine/core';
import { useFormState, useFormStatus } from 'react-dom';
import { signUp } from '@/app/lib/actions';
import { redirect } from 'next/navigation';

export function SignUpForm(){
    const [errorMessage, dispatch] = useFormState(signUp, undefined);
    return (
        <form action={dispatch}>
            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                <TextInput label="User name" placeholder="trend tail" name="name" required />
                <TextInput label="Email" placeholder="you@trendtail.shop" name="email" required />
                <PasswordInput label="Password" placeholder="Your password" name="password" required mt="md" />
                <SignUpButton />
                <div
                    className="flex h-8 items-end space-x-1"
                    aria-live="polite"
                    aria-atomic="true"
                    >
                    {errorMessage && (
                        <>
                            <p className="text-sm text-red-500">{errorMessage}</p>
                        </>
                    )}
                </div>
            </Paper>
        </form>
    )
}

function SignUpButton() {
    const { pending } = useFormStatus();
   
    return (
        <Button fullWidth mt="xl" color='violet' aria-disabled={pending} type='submit'>
            Sign up
        </Button>
    );
  }