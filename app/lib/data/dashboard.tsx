import { FaCalendar, FaCalendarAlt, FaCalendarWeek, FaCalendarDay } from 'react-icons/fa';
import colors from '@/constants/color';
import { CarouselData } from '@/types/Carousel';
import { TabData } from '@/types/Tabs';
import { RankingTable } from '@/components/Table/RankingTable/RankingTable';
import { TableDatum } from '@/types/RankingTable';

export const dashboardCarouselData: CarouselData[] = [
  {
    image:
      'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Best forests to visit in North America',
    category: 'nature',
  },
  {
    image:
      'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Hawaii beaches review: better than you think',
    category: 'beach',
  },
  {
    image:
      'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Mountains at night: 12 best locations to enjoy the view',
    category: 'nature',
  },
  {
    image:
      'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Aurora in Norway: when to visit for best experience',
    category: 'nature',
  },
  {
    image:
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Best places to visit this winter',
    category: 'tourism',
  },
  {
    image:
      'https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Active volcanos reviews: travel at your own risk',
    category: 'nature',
  },
];

export const rankingItemData: TableDatum = {
  head: ['Rank', 'Item Name', 'Price', 'Volume'],
  body: [
    [1, 'Wireless Headphones', 59.99, 2001],
    [2, 'New Ergonomic Keyboard', 58.88, 1989],
    [3, 'Golden Apple', 2.12, 1300],
    [4, 'Ergonomic Keyboard', 58.88, 1212],
    [5, 'Ergonomic Keyboard', 58.88, 1111],
  ],
};

export const rankingReviewData: TableDatum = {
  head: ['Rank', 'Reviewer', 'Item Name', 'Title', 'Good'],
  body: [
    [
      1,
      {
        img: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
        name: 'John Devis',
        id: 'jfadf',
      },
      'Pen',
      'Good golden pen!',
      2001,
    ],
    [
      2,
      {
        name: 'Apple2',
        id: 'jfada',
      },
      'Apple',
      'Tasty apple',
      1989,
    ],
    [
      3,
      {
        img: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png',
        name: 'Mikan Cat',
        id: 'jfadf',
      },
      'Apple',
      'Tasty apple',
      1989,
    ],
    [
      4,
      {
        img: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png',
        name: 'Phone Cat',
        id: 'jfadfaa',
      },
      'Apple',
      'Tasty apple pie!',
      1989,
    ],
  ],
};
export const dashboardItemTabsData: TabData[] = [
  {
    title: 'Annual',
    icon: FaCalendar,
    iconStyle: { color: colors.primary },
    content: <RankingTable tableData={rankingItemData} />,
  },
  {
    title: 'Monthly',
    icon: FaCalendarAlt,
    iconStyle: { color: colors.primary },
    content: 'b',
  },
  {
    title: 'Weekly',
    icon: FaCalendarWeek,
    iconStyle: { color: colors.primary },
    content: 'c',
  },
  {
    title: 'Daily',
    icon: FaCalendarDay,
    iconStyle: { color: colors.primary },
    content: '',
  },
];

export const dashboardReviewTabsData: TabData[] = [
  {
    title: 'Annual',
    icon: FaCalendar,
    iconStyle: { color: colors.primary },
    content: <RankingTable tableData={rankingReviewData} />,
  },
  {
    title: 'Monthly',
    icon: FaCalendarAlt,
    iconStyle: { color: colors.primary },
    content: 'b',
  },
  {
    title: 'Weekly',
    icon: FaCalendarWeek,
    iconStyle: { color: colors.primary },
    content: 'c',
  },
  {
    title: 'Daily',
    icon: FaCalendarDay,
    iconStyle: { color: colors.primary },
    content: '',
  },
];
