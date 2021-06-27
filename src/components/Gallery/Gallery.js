import './Gallery.scss';
import Button from '../Button/Button';
import GalleryCard from '../GalleryCard/GalleryCard';
import cardImg1 from '../../images/desktop/image-deep-earth.jpg';
import cardImg2 from '../../images/desktop/image-night-arcade.jpg';
import cardImg3 from '../../images/desktop/image-soccer-team.jpg';
import cardImg4 from '../../images/desktop/image-grid.jpg';
import cardImg5 from '../../images/desktop/image-from-above.jpg';
import cardImg6 from '../../images/desktop/image-pocket-borealis.jpg';
import cardImg7 from '../../images/desktop/image-curiosity.jpg';
import cardImg8 from '../../images/desktop/image-fisheye.jpg';

import mobileImg1 from '../../images/mobile/image-deep-earth.jpg';
import mobileImg2 from '../../images/mobile/image-night-arcade.jpg';
import mobileImg3 from '../../images/mobile/image-soccer-team.jpg';
import mobileImg4 from '../../images/mobile/image-grid.jpg';
import mobileImg5 from '../../images/mobile/image-from-above.jpg';
import mobileImg6 from '../../images/mobile/image-pocket-borealis.jpg';
import mobileImg7 from '../../images/mobile/image-curiosity.jpg';
import mobileImg8 from '../../images/mobile/image-fisheye.jpg';

const Gallery = () => {
  const mq1 = window.matchMedia('(max-width: 550px)');
  let mobileView = mq1.matches;

  return (
    <section className='gallery'>
      <header className='gallery-header'>
        <h2 className='gallery-heading'>Our Creations</h2>
        <Button text={'See All'} />
      </header>
      <div className='gallery-grid' data-aos='fade-up'>
        <GalleryCard
          img={mobileView ? mobileImg1 : cardImg1}
          desc={'Deep Earth'}
        />
        <GalleryCard
          img={mobileView ? mobileImg2 : cardImg2}
          desc={'Night Arcade'}
        />
        <GalleryCard
          img={mobileView ? mobileImg3 : cardImg3}
          desc={'Soccer Team VR'}
        />
        <GalleryCard
          img={mobileView ? mobileImg4 : cardImg4}
          desc={'The Grid'}
        />
        <GalleryCard
          img={mobileView ? mobileImg5 : cardImg5}
          desc={'From Up Above VR'}
        />
        <GalleryCard
          img={mobileView ? mobileImg6 : cardImg6}
          desc={'Pocket Borealis'}
        />
        <GalleryCard
          img={mobileView ? mobileImg7 : cardImg7}
          desc={'The Curiosity'}
        />
        <GalleryCard
          img={mobileView ? mobileImg8 : cardImg8}
          desc={'Make It Fisheye'}
        />
      </div>
    </section>
  );
};

export default Gallery;
