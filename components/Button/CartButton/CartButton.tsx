import { ActionIcon, ActionIconProps } from '@mantine/core';
import { IconShoppingCart } from '@tabler/icons-react';

export function CartButton(props: ActionIconProps) {
  return (
    <ActionIcon title="Cart" size="xl" color="violet" variant="transparent" {...props}>
      <IconShoppingCart size={24} />
    </ActionIcon>
  );
}
