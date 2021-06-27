import './Footer.scss';
import NavLinks from '../NavLinks/NavLinks';
import logo from '../../images/logo.svg';
import { GrFacebook } from 'react-icons/gr';
import { AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';
import { FaPinterest } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div>
          <img src={logo} alt='loopstudios logo' class='footer-logo' />
          <NavLinks />
        </div>
        <div>
          <div class='footer-socials'>
            <a href='#!'>
              <GrFacebook className='footer-icon' size={25} />
            </a>
            <a href='#!'>
              <AiOutlineTwitter className='footer-icon' size={30} />
            </a>
            <a href='#!'>
              <FaPinterest className='footer-icon' size={25} />
            </a>
            <a href='#!'>
              <AiOutlineInstagram className='footer-icon' size={30} />
            </a>
          </div>
          <p class='footer-copyright'>
            © 2021 Loopstudios. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
