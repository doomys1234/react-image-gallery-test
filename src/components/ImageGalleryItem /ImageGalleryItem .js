import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5'
import { MdLocationOff } from 'react-icons/md'
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
      <p className={s.text}><FaUserCircle/>{author}</p>
      {location ?  <p className={s.text}><IoLocationSharp/>{location}</p> :  <p className={s.text}><MdLocationOff/>Location unknown</p>}
    </li>
  );
}
ImageGalleryItem.propTypes = {
  smallFormatUrl: PropTypes.string,
  fullFormatUrl: PropTypes.string,
  author: PropTypes.string,
  location:PropTypes.string,
 
};
