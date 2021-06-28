import './Header.scss';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';

const Header = ({ isActive, setIsActive }) => {
  return (
    <header className='header'>
      <Navbar setIsActive={setIsActive} isActive={isActive} />
      <Hero />
    </header>
  );
};

export default Header;
