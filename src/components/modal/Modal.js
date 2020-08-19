import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

export class Modal extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleClick = e => {
    if (e.target.dataset.name !== 'overlay') {
      return;
    }
    this.props.onClose();
  };

  render() {
    return (
      <div
        className={styles.Overlay}
        data-name="overlay"
        onClick={this.handleClick}
      >
        <div className={styles.Modal} data-name="modal">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Modal;
