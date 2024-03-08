'use client';

import { Group, Burger, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import { IconHistory, IconShoppingCart } from '@tabler/icons-react';
import { signOutServerAction } from '@/app/lib/actions';
import classes from './Header.module.css';
import { SearchInput } from '../Input/SearchInput/SearchInput';
import { CartButton } from '../Button/CartButton/CartButton';
import { AvatarButton } from '../Button/AvatarButton/AvatarButton';
import { Menu } from '../Menu/Menu';
import { DropdownMenuItems } from '../Menu/MenuItems/DropdownMenuItems';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

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
    { 
      text: 'Sign out', 
      color: 'red', 
      formAction: async () => {
        await signOutServerAction();
      },
    },
  ];

  // ログイン情報取得
  const session = useSession();
  const user = session.data?.user
  console.log(session.data)

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
            {
              session.status==='authenticated'&&user
              ?
              <Menu
              button={<AvatarButton name={user.name?.toString()} />}
              menuItems={<DropdownMenuItems items={menuItems} />}
              menuProps={{ position: 'bottom-end' }}
              />
              :
              <Link href='/signIn'>
                <Button
                  variant="gradient"
                  gradient={{ from: 'violet', to: 'indigo', deg: 120 }}
                >
                  Sign in
                </Button>
              </Link>
            }
            
          </Group>
        </Group>
      </div>
    </header>
  );
}
