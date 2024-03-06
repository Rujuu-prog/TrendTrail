import type { Meta, StoryObj } from '@storybook/react';
import { CartButton } from './CartButton';

const meta: Meta<typeof CartButton> = {
  title: 'Button/CartButton',
  component: CartButton,
  argTypes: {
    size: {
      control: 'multi-select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof CartButton>;

export const Default: Story = {
  args: {
    size: 'xl',
  },
  render: (args) => <CartButton {...args} />,
};
