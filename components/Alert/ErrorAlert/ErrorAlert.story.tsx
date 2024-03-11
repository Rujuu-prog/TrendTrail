import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ErrorAlert } from './ErrorAlert';

const meta: Meta<typeof ErrorAlert> = {
  title: 'Input/ErrorAlert',
  component: ErrorAlert,
  argTypes: {
    errorMsg: { control: 'text' },
  },
};

export default meta;

// Story定義
type Story = StoryObj<typeof ErrorAlert>;

export const Default: Story = {
  args: {
    errorMsg: 'errorrrrr!',
  },
  render: (args) => <ErrorAlert {...args} />,
};
