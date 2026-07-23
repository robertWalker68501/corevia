import { ReactNode } from 'react';

import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex min-h-dvh flex-col'>
      <Header />
      <div className='flex-1'>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
