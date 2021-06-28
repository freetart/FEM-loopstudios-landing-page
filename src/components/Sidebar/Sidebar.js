import './Sidebar.scss';
import logo from '../../images/logo.svg';
import NavLinks from '../NavLinks/NavLinks';

const Sidebar = ({ isActive }) => {
  if (isActive) {
    return (
      <aside className='sidebar'>
        <div className='sidebar-content'>
          <img src={logo} alt='loopstudios logo' className='sidebar-logo' />
          <NavLinks />
        </div>
      </aside>
    );
  } else {
    return '';
  }
};

export default Sidebar;
