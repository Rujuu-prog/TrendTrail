import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
  } from '@mantine/core';
  import classes from './page.module.css';
import Link from 'next/link';
import { SignUpForm } from '@/components/Form/SignUpForm/SignUpForm';
  
  export default function Page() {
    return (
      <Container size={420} my={40}>
        <Title ta="center" className={classes.title}>
          Welcome TrendTail!
        </Title>
        <Text c="dimmed" size="sm" ta="center" mt={5}>
          Do not have an account?{' '}
          <Anchor size="sm" component="button">
            <Link href="/signIn">
              Sign in
            </Link>
          </Anchor>
        </Text>
  
        <SignUpForm />
      </Container>
    );
  }