import './Gallery.scss';
import GalleryCard from '../GalleryCard/GalleryCard';
import cardImg1 from '../../images/desktop/image-deep-earth.jpg';
import cardImg2 from '../../images/desktop/image-night-arcade.jpg';
import cardImg3 from '../../images/desktop/image-soccer-team.jpg';
import cardImg4 from '../../images/desktop/image-grid.jpg';
import cardImg5 from '../../images/desktop/image-from-above.jpg';
import cardImg6 from '../../images/desktop/image-pocket-borealis.jpg';
import cardImg7 from '../../images/desktop/image-curiosity.jpg';
import cardImg8 from '../../images/desktop/image-fisheye.jpg';
import Button from '../Button/Button';

const Gallery = () => {
  return (
    <section className='gallery'>
      <header className='gallery-header'>
        <h2 className='gallery-heading'>Our Creations</h2>
        <Button text={'See All'} />
      </header>
      <div className='gallery-grid'>
        <GalleryCard img={cardImg1} desc={'Deep Earth'} />
        <GalleryCard img={cardImg2} desc={'Night Arcade'} />
        <GalleryCard img={cardImg3} desc={'Soccer Team VR'} />
        <GalleryCard img={cardImg4} desc={'The Grid'} />
        <GalleryCard img={cardImg5} desc={'From Up Above VR'} />
        <GalleryCard img={cardImg6} desc={'Pocket Borealis'} />
        <GalleryCard img={cardImg7} desc={'The Curiosity'} />
        <GalleryCard img={cardImg8} desc={'Make It Fisheye'} />
      </div>
    </section>
  );
};

export default Gallery;
