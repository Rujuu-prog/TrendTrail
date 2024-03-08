'use client';

import { useSession } from 'next-auth/react';

export default function Page() {
  const session = useSession();

  console.table(session);
  return (
    <>
      <p>dashboard</p>
    </>
  );
}
