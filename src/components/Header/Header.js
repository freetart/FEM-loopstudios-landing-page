import './Header.scss';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';

const Header = () => {
  return (
    <header className='header'>
      <Navbar />
      <Hero />
    </header>
  );
};

export default Header;
