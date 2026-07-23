import { ReactNode } from 'react';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className='absolute top-4 left-4'>
        <Link
          href='/'
          className={`${buttonVariants({ variant: 'outline' })} flex items-center gap-2`}
        >
          <ArrowLeft size={16} />
          Back
        </Link>
      </div>
      <div className='flex min-h-dvh w-full flex-col items-center justify-center'>
        {children}
      </div>
    </>
  );
};

export default AuthLayout;
