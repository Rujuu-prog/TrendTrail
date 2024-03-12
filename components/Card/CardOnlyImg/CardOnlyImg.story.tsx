// CardOnlyImg.stories.tsx
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CardOnlyImg } from './CardOnlyImg';

const meta: Meta<typeof CardOnlyImg> = {
  title: 'Card/CardOnlyImg',
  component: CardOnlyImg,
  argTypes: {
    image: { control: 'text' },
    title: { control: 'text' },
    category: { control: 'text' },
  },
};

export default meta;

// Story定義
type Story = StoryObj<typeof CardOnlyImg>;

export const Default: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Fresh fish!',
    category: 'Sale',
  },
  render: (args) => <CardOnlyImg {...args} />,
};
