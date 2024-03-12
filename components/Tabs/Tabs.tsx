import colors from '@/constants/color';
import { TabData } from '@/types/Tabs';
import { Tabs as MantineTabs, rem } from '@mantine/core';
import React from 'react';

export function Tabs({ tabData }: {tabData:TabData[]}) {
  const iconStyle = { width: rem(12), height: rem(12) };

  return (
    <MantineTabs color={colors.primary} defaultValue={tabData[0]?.title}>
      <MantineTabs.List>
        {tabData.map((tab, index) => (
          <MantineTabs.Tab
            key={tab.title}
            value={tab.title}
            leftSection={tab.icon && <tab.icon style={{iconStyle, ...tab.iconStyle}} />}
          >
            {tab.title}
          </MantineTabs.Tab>
        ))}
      </MantineTabs.List>

      {tabData.map((tab) => (
        <MantineTabs.Panel key={tab.title} value={tab.title}>
          {tab.content}
        </MantineTabs.Panel>
      ))}
    </MantineTabs>
  );
}
