import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, Content } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', event => {
      if (event.code === 'Escape') {
        this.props.onClose();
      }
    });
  }

  componentWillUnmount() {}

  render() {
    return createPortal(
      <Backdrop>
        <Content>{this.props.children}</Content>
      </Backdrop>,
      modalRoot
    );
  }
}
