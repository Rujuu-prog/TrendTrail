'use client';

import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Group,
    Button,
  } from '@mantine/core';
import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@/app/lib/actions';

export function SignInForm(){
    const [errorMessage, dispatch] = useFormState(authenticate, undefined);
    return (
        <form action={dispatch}>
            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                <TextInput label="Email" placeholder="you@trendtail.shop" name='email' required />
                <PasswordInput label="Password" placeholder="Your password" name='password' required mt="md" />
                <Group justify="space-between" mt="lg">
                    <Checkbox label="Remember me" />
                    <Anchor component="button" size="sm">
                    Forgot password?
                    </Anchor>
                </Group>
                <LoginButton />
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

function LoginButton() {
    const { pending } = useFormStatus();
   
    return (
        <Button fullWidth mt="xl" color='violet' aria-disabled={pending} type='submit'>
            Sign in
        </Button>
    );
  }