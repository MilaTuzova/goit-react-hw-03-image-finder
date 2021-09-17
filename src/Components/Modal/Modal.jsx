import React, { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      console.log('ESC');

      this.props.onCloseModal();
    }
  };

  handleBackdropClick = e => {
    console.log(e.target);
    console.log(e.currentTarget);

    if (e.currentTarget === e.target) {
      console.log('закріваем модалку')
      this.props.onCloseModal();
    }
  };

  render() {
   
    return createPortal(
      <div className="Overlay" onClick={this.handleBackdropClick}>
        <div className="Modal" >{this.props.children}</div>
      </div>,
      modalRoot,
    );
  }
}

export default Modal;
