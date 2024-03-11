import { Carousel } from '@mantine/carousel';
import { rem } from '@mantine/core';
import { CardOnlyImg } from '@/components/Card/CardOnlyImg/CardOnlyImg';

interface CarouselData {
    image: string;
    title: string;
    category: string;
}

interface CarouselDatas {
    data: CarouselData[]
}

export function CardsCarousel({data}: CarouselDatas) {
    const slides = data.map((item) => (
      <Carousel.Slide key={item.title}>
        <CardOnlyImg {...item} />
      </Carousel.Slide>
    ));
  
    return (
      <div style={{ height: '100%', display: 'flex' }}>
        <Carousel
          height="100%"
          style={{flex: 1}}
          slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
          slideGap={{ base: rem(2), sm: 'xl' }}
          align="center"
          slidesToScroll={1}
          loop
          withIndicators
        >
          {slides}
        </Carousel>
      </div>
    );
  }