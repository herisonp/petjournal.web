'use client';
import { IconMenuburger } from '@/components/icons/IconMenuburger';
import * as MenubarRadix from '@radix-ui/react-menubar';
import { LogOut } from 'lucide-react';
import { LogoutButton } from './LogoutButton';

export function Menubar() {
  return (
    <MenubarRadix.Root>
      <MenubarRadix.Menu>
        <MenubarRadix.Trigger>
          <IconMenuburger size={24} />
        </MenubarRadix.Trigger>

        <MenubarRadix.Portal>
          <MenubarRadix.Content
            className="relative z-50 bg-custom-purple text-white px-4 py-2 rounded-md"
            align="end"
            sideOffset={5}
            alignOffset={0}
          >
            <MenubarRadix.Item asChild>
              <LogoutButton />
            </MenubarRadix.Item>
          </MenubarRadix.Content>
        </MenubarRadix.Portal>
      </MenubarRadix.Menu>
    </MenubarRadix.Root>
  );
}
