import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem /ImageGalleryItem ';
import s from './ImageGallery.module.scss';
import PropTypes from 'prop-types';
export default function ImageGallery({ images }) {
  return (
    <ul className={s.image_gallery}>
      {images.map(image => (
        
        <ImageGalleryItem
          key={image.id}
          smallFormatUrl={image.smallFormatUrl}
          fullFormatUrl={image.fullFormatUrl}
          author={image.author}
          location={image.location}
          
        />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array,
};
