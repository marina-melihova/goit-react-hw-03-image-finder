import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.css';

const Button = ({ loadImages }) => {
  return (
    <button className={styles.Button} type="button" onClick={loadImages}>
      Load more
    </button>
  );
};

Button.propTypes = {
  loadImages: PropTypes.func,
};

export default Button;
