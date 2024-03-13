'use client';

import { useSession } from 'next-auth/react';
import { Grid, Space } from '@mantine/core';
import {
  dashboardCarouselData,
  dashboardItemTabsData,
  dashboardReviewTabsData,
} from '@/app/lib/data/dashboard';
import { CardsCarousel } from '@/components/Carousel/CardsCarousel/CardsCarousel';
import { Tabs } from '@/components/Tabs/Tabs';

export default function Page() {
  const session = useSession();
  console.table(session);

  return (
    <>
      <CardsCarousel data={dashboardCarouselData} />
      <Space h="lg" />
      <Grid grow gutter="lg">
        <Grid.Col span={6}>
          <Tabs tabData={dashboardItemTabsData} />
        </Grid.Col>
        <Grid.Col span={6}>
          <Tabs tabData={dashboardReviewTabsData} />
        </Grid.Col>
      </Grid>
    </>
  );
}
