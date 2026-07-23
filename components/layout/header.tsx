import Navbar from '../navigation/navbar';

const Header = () => {
  return (
    <header className='border-border bg-background sticky top-0 z-50 border-b py-4'>
      <div className='page-wrapper'>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
