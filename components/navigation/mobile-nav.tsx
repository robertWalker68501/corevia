'use client';

import { useState } from 'react';

import { Menu } from 'lucide-react';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { NAV_LINKS } from '@/constants';

import SiteLogo from '../site-logo';
import NavLink from './nav-link';
import ThemeToggle from '../theme-toggle';

const MobileNav = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Sheet
      open={open}
      onOpenChange={setOpen}
    >
      <SheetTrigger>
        <Menu size={16} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <SiteLogo
              href='/'
              onClick={handleOpen}
            />
          </SheetTitle>
          <SheetDescription>
            Where Customers and Supply Chains Connect.
          </SheetDescription>
        </SheetHeader>
        <div className='flex flex-col gap-4 px-4'>
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.id}
              href={link.href}
              label={link.label}
              isMobile
              onClick={handleOpen}
            />
          ))}
        </div>
        <SheetFooter>
          <ThemeToggle />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
