import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';
import { IconMessage, IconPhoto, IconSettings } from '@tabler/icons-react';

const meta: Meta<typeof Tabs> = {
  title: 'Tabs',
  component: Tabs,
  argTypes: {
    tabData: {
        title: {controle: 'text'},
        icon: {controle: 'text'},
        content: {controle: 'text'},
    }
  },
};

export default meta;

// Story定義
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    tabData: [
        {
            title: 'gallery',
            icon: IconPhoto,
            content: <p>Gallery tab content</p>,
        },
        {
            title: 'message',
            icon: IconMessage,
            content: <p>Messages tab content</p>,
        },
        {
            title: 'settings',
            icon: IconSettings,
            content: <p>Settings tab content</p>,
        },
    ]
  },
  render: (args) => <Tabs {...args} />,
};
