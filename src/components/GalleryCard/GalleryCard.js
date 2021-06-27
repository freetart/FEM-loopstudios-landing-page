import React from 'react';
import './GalleryCard.scss';

const GalleryCard = ({ img, desc }) => {
  return (
    <article className='gallery-card'>
      <a href='#!'>
        <img src={img} alt='gallery background' className='gallery-card-img' />
        <h2 className='gallery-card-text'>{desc}</h2>
      </a>
    </article>
  );
};

export default GalleryCard;
