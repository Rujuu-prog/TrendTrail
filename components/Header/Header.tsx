'use client';

import { Group, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import { IconHistory, IconShoppingCart } from '@tabler/icons-react';
import classes from './Header.module.css';
import { SearchInput } from '../Input/SearchInput/SearchInput';
import { CartButton } from '../Button/CartButton/CartButton';
import { AvatarButton } from '../Button/AvatarButton/AvatarButton';
import { Menu } from '../Menu/Menu';
import { DropdownMenuItems } from '../Menu/MenuItems/DropdownMenuItems';

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);

  // AvatarのMenu要素
  const menuItems = [
    { label: 'Order' },
    { text: 'History', icon: IconHistory },
    { text: 'Cart', icon: IconShoppingCart },
    { divider: true },
    { label: 'Account' },
    { text: 'Settings' },
    { text: 'Sign out', color: 'red' },
  ];

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
          <MantineLogo size={28} />
        </Group>

        <Group className={classes.expand} grow>
          <SearchInput className={classes.search} visibleFrom="xs" />
        </Group>

        <Group>
          <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
            <CartButton />
            <Menu
              button={<AvatarButton name="aaa" />}
              menuItems={<DropdownMenuItems items={menuItems} />}
              menuProps={{ position: 'bottom-end' }}
            />
          </Group>
        </Group>
      </div>
    </header>
  );
}
