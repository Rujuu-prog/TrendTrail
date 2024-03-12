'use client';

import { dashboardCarouselData } from '@/app/lib/data/dashboard';
import { CardsCarousel } from '@/components/Carousel/CardsCarousel/CardsCarousel';
import { useSession } from 'next-auth/react';

export default function Page() {
  const session = useSession();
  console.table(session);

  return (
    <>
      <CardsCarousel data={dashboardCarouselData} />
    </>
  );
}
