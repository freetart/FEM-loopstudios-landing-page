import './Tag.scss';
import logo from '../../images/logo/habibdevgif.gif';

const Tag = () => {
  return (
    <article class='tag'>
      <h3 class='tag-heading'>
        /* project for{' '}
        <a
          href='https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw'
          target='_blank'
          class='tag-link'
        >
          frontend mentor
        </a>{' '}
        coded by{' '}
        <a
          href='https://github.com/habibdev96'
          target='_blank'
          class='tag-link'
        >
          habibdev{' '}
        </a>
        */
      </h3>
      <img src={logo} alt='logo' class='tag-logo' />
    </article>
  );
};

export default Tag;
