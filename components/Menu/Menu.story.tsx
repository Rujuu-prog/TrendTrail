import { Meta, StoryObj } from '@storybook/react';
import { Menu } from './Menu';
import { AvatarButton } from '../Button/AvatarButton/AvatarButton';
import { DropdownMenuItems } from './MenuItems/DropdownMenuItems';

const meta: Meta = {
  title: 'Menu',
  component: Menu,
};

export default meta;

type Story = StoryObj<typeof Menu>;

const menuItems = [
  { label: 'Application' },
  { text: 'Settings' },
  { text: 'Messages' },
  { text: 'Gallery' },
  { text: 'Search', shortcut: '⌘K' },
  { divider: true },
  { label: 'Danger zone' },
  { text: 'Transfer my data' },
  { text: 'Delete my account', color: 'red' },
];

export const Default: Story = {
  render: () => (
    <Menu
      button={<AvatarButton name="test" />}
      menuItems={<DropdownMenuItems items={menuItems} />}
    />
  ),
};

export const BottomEnd: Story = {
  render: () => (
    <Menu
      button={<AvatarButton />}
      menuItems={<DropdownMenuItems items={menuItems} />}
      menuProps={{ position: 'bottom-end' }}
    />
  ),
};
