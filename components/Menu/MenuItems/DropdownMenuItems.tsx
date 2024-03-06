import { Menu as MantineMenu, Text, rem } from '@mantine/core';

interface MenuItem {
  text?: string;
  icon?: React.ElementType;
  color?: string;
  shortcut?: string;
  label?: string;
  divider?: boolean;
}

interface DropdownMenuItemsProps {
  items: MenuItem[];
}

export function DropdownMenuItems({ items }: DropdownMenuItemsProps) {
  return (
    <MantineMenu.Dropdown>
      {items.map((item, index) => {
        if (item.label) {
          return <MantineMenu.Label key={index}>{item.label}</MantineMenu.Label>;
        }
        if (item.divider) {
          return <MantineMenu.Divider key={index} />;
        }
        return (
          <MantineMenu.Item
            key={index}
            color={item.color}
            leftSection={item.icon && <item.icon style={{ width: rem(14), height: rem(14) }} />}
            rightSection={item.shortcut && (
              <Text size="xs" color="dimmed">
                {item.shortcut}
              </Text>
            )}
          >
            {item.text}
          </MantineMenu.Item>
        );
      })}
    </MantineMenu.Dropdown>
  );
}
