import './Navbar.scss';
import logo from '../../images/logo.svg';

const Navbar = () => {
  return (
    <nav className='nav'>
      <div className='nav-content'>
        <a href='#!'>
          <img src={logo} alt='loopstudios logo' className='nav-logo' />
        </a>
        <ul className='nav-list'>
          <li className='nav-item'>
            <a href='#!' className='nav-link'>
              About
            </a>
          </li>
          <li className='nav-item'>
            <a href='#!' className='nav-link'>
              Careers
            </a>
          </li>
          <li className='nav-item'>
            <a href='#!' className='nav-link'>
              Events
            </a>
          </li>
          <li className='nav-item'>
            <a href='#!' className='nav-link'>
              Products
            </a>
          </li>
          <li className='nav-item'>
            <a href='#!' className='nav-link'>
              Support
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
