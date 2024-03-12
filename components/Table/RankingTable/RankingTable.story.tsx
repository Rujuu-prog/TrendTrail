import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { RankingTable } from './RankingTable';
import { rankingItemData, rankingReviewData } from '@/app/lib/data/dashboard';

const meta: Meta<typeof RankingTable> = {
  title: 'RankingTable',
  component: RankingTable,
};

export default meta;

// Story定義
type Story = StoryObj<typeof RankingTable>;

export const Item: Story = {
  args: {
    tableData: rankingItemData,
  },
  render: (args) => <RankingTable {...args} />,
};

export const Review: Story = {
  args: {
    tableData: rankingReviewData,
  },
  render: (args) => <RankingTable {...args} />,
};
