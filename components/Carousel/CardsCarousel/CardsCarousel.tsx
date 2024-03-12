import { Carousel } from '@mantine/carousel';
import { CardOnlyImg } from '@/components/Card/CardOnlyImg/CardOnlyImg';
import { CarouselData } from '@/types/Carousel';

export function CardsCarousel({ data }: { data: CarouselData[] }) {
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <CardOnlyImg {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      height="100%"
      style={{ flex: 1 }}
      slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
      slideGap={{ base: 0, sm: 'md' }}
      align="center"
      slidesToScroll={1}
      loop
      withIndicators
    >
      {slides}
    </Carousel>
  );
}
