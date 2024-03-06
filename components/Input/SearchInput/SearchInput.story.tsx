// SearchInput.stories.tsx
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SearchInput } from './SearchInput';

const meta: Meta<typeof SearchInput> = {
  title: 'Input/SearchInput',
  component: SearchInput,
  argTypes: {
    placeholder: { control: 'text' },
    size: {
      control: 'multi-select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
};

export default meta;

// Story定義
type Story = StoryObj<typeof SearchInput>;

export const Default: Story = {
  args: {
    placeholder: 'Search items',
  },
  render: (args) => <SearchInput {...args} />,
};

export const SmallSize: Story = {
  args: {
    ...Default.args,
    size: 'sm',
  },
  render: (args) => <SearchInput {...args} />,
};

export const CustomPlaceholder: Story = {
  args: {
    ...Default.args,
    placeholder: 'Type here to search...',
  },
  render: (args) => <SearchInput {...args} />,
};
