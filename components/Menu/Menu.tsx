import { Menu as MantineMenu, MenuProps } from '@mantine/core';
import React from 'react';

interface Props {
  menuProps?: MenuProps;
  button: React.ReactNode;
  menuItems: React.ReactNode;
}

export function Menu(props: Props) {
  return (
    <MantineMenu withArrow {...props.menuProps}>
      <MantineMenu.Target>{props.button}</MantineMenu.Target>
      {props.menuItems}
    </MantineMenu>
  );
}
