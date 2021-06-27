import './Navbar.scss';
import logo from '../../images/logo.svg';
import NavLinks from '../NavLinks/NavLinks';
import MobileMenuToggle from '../MobileMenuToggle/MobileMenuToggle';

const Navbar = () => {
  return (
    <nav className='nav'>
      <div className='nav-content'>
        <a href='#!'>
          <img src={logo} alt='loopstudios logo' className='nav-logo' />
        </a>
        {window.innerWidth <= 800 ? (
          <MobileMenuToggle />
        ) : (
          <NavLinks className='header-nav' />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
