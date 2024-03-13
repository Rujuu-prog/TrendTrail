import { Anchor, Title, Text, Container } from '@mantine/core';
import Link from 'next/link';
import classes from './page.module.css';
import { SignInForm } from '@/components/Form/SignInForm/SignInForm';

export default function Page() {
  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Welcome back TrendTail!
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Do not have an account yet?{' '}
        <Anchor size="sm" component="button">
          <Link href="/signUp">Create account</Link>
        </Anchor>
      </Text>

      <SignInForm />
    </Container>
  );
}
