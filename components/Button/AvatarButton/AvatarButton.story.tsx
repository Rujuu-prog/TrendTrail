import { Meta, StoryObj } from '@storybook/react';
import { AvatarButton } from './AvatarButton';

const meta: Meta = {
  title: 'Button/AvatarButton',
  component: AvatarButton,
  argTypes: {
    src: { control: 'text' },
    name: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof AvatarButton>;

export const Default: Story = {
  render: (args) => <AvatarButton image="" name="" email="" {...args} />,
};
