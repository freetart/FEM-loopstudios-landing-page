import './Tag.scss';
import logo from '../../images/logo/habibdevgif.gif';

const Tag = () => {
  return (
    <article className='tag'>
      <h3 className='tag-heading'>
        /* project for{' '}
        <a
          href='https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw'
          target='_blank'
          className='tag-link'
        >
          frontend mentor
        </a>{' '}
        coded by{' '}
        <a
          href='https://github.com/habibdev96'
          target='_blank'
          className='tag-link'
        >
          habibdev{' '}
        </a>
        */
      </h3>
      <img src={logo} alt='logo' className='tag-logo' />
    </article>
  );
};

export default Tag;
