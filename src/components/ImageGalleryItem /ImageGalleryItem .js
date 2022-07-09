import React from 'react';
import s from './ImageGalleryItem.module.scss';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setModalImage } from '../../redux/appSlice';
export default function ImageGalleryItem({
  smallFormatUrl,
  fullFormatUrl,
  author,
  location,
  
}) {
  const dispatch = useDispatch()
  return (
    <li className={s.image_gallery_item} onClick={() => dispatch(setModalImage(fullFormatUrl))}>
      <img className={s.gallery_item_image} src={smallFormatUrl} alt="#" />
      <p className={s.text}>author:{author}</p>
      <p className={s.text}>{location}</p>
    </li>
  );
}
ImageGalleryItem.propTypes = {
  smallFormatUrl: PropTypes.string,
  fullFormatUrl: PropTypes.string,
  author: PropTypes.string,
  location:PropTypes.string,
 
};
