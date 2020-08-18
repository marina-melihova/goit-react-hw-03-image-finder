import React from 'react';
import PropTypes from 'prop-types';

import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, setLargeImage }) => {
  return (
    <ul className={styles.ImageGallery}>
      {images.map(image => (
        <li key={image.id} className={styles.ImageGalleryItem}>
          <img
            className={styles.ImageGalleryItemImage}
            src={image.webformatURL}
            alt="super-gallery"
            onClick={() => setLargeImage(image.largeImageURL)}
          />
        </li>
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ImageGallery;
