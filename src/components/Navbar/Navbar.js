import './Navbar.scss';
import logo from '../../images/logo.svg';
import NavLinks from '../NavLinks/NavLinks';

const Navbar = () => {
  return (
    <nav className='nav'>
      <div className='nav-content'>
        <a href='#!'>
          <img src={logo} alt='loopstudios logo' className='nav-logo' />
        </a>
        <NavLinks />
      </div>
    </nav>
  );
};

export default Navbar;
