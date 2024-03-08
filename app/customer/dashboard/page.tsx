'use client';

import { Metadata } from 'next';
import { useSession } from 'next-auth/react';

export const metadata: Metadata = {
  title: 'Dashboard',
};

export default function Page() {
  const session = useSession();

  console.table(session);
  return (
    <>
      <p>dashboard</p>
    </>
  );
}
