import Image from 'next/image';
import Link from 'next/link';

import { FOOTER_LINKS, SOCIALS } from '@/constants';

const Footer = () => {
  return (
    <footer className='bg-muted/30 border-t'>
      <div className='mx-auto max-w-7xl px-6 py-16 lg:px-8'>
        <div className='grid gap-12 lg:grid-cols-[1.2fr_repeat(4,1fr)]'>
          <div className='max-w-sm'>
            <Link
              href='/'
              className='font-heading flex items-center gap-2 text-2xl font-semibold tracking-tight'
            >
              <Image
                src='/assets/images/logo.png'
                alt='Corevia Logo'
                height={30}
                width={30}
              />
              Corevia
            </Link>
            <p className='text-muted-foreground mt-4 text-sm leading-7'>
              Modern business operations software that connects customers,
              suppliers, inventory, warehouses, and orders into one intelligent
              platform.
            </p>
            <div className='mt-6 flex gap-2'>
              {SOCIALS.map(({ icon: Icon, href }, i) => (
                <Link
                  key={i}
                  href={href}
                  className='text-muted-foreground hover:border-primary hover:text-primary rounded-lg border p-2 transition-colors'
                >
                  <Icon className='size-4' />
                </Link>
              ))}
            </div>
          </div>
          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section}>
              <h3 className='font-heading text-sm font-semibold tracking-wider uppercase'>
                {section}
              </h3>
              <ul className='mt-5 space-y-3'>
                {links.map(([label, href]) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className='text-muted-foreground hover:text-primary text-sm transition-colors'
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className='text-muted-foreground mt-16 flex flex-col gap-4 border-t pt-8 text-sm md:flex-row md:items-center md:justify-between'>
          <p>© {new Date().getFullYear()} Corevia. All rights reserved.</p>
          <div className='flex flex-wrap gap-6'>
            <Link
              href='/privacy'
              className='hover:text-primary'
            >
              Privacy
            </Link>
            <Link
              href='/terms'
              className='hover:text-primary'
            >
              Terms
            </Link>
            <Link
              href='/security'
              className='hover:text-primary'
            >
              Security
            </Link>
            <Link
              href='/status'
              className='hover:text-primary'
            >
              System Status
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
