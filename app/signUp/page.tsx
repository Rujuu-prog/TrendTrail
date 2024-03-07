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
  
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput label="User name" placeholder="trend tail" required />
          <TextInput label="Email" placeholder="you@trendtail.shop" required />
          <PasswordInput label="Password" placeholder="Your password" required mt="md" />
          <Button fullWidth mt="xl" color='violet'>
            Sign up
          </Button>
        </Paper>
      </Container>
    );
  }