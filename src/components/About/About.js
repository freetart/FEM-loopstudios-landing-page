import './About.scss';
import img from '../../images/desktop/image-interactive.jpg';

const About = () => {
  return (
    <section className='about'>
      <div className='about-content'>
        <img
          src={img}
          alt='man with vr headset'
          className='about-img'
          data-aos='fade-left'
        />
        <div className='about-info'>
          <h2 className='about-heading'>The leader in interactive VR</h2>
          <p className='about-desc'>
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
