import React, { memo } from 'react';
import ModalWrapper from './style';

const Modal = memo(({ visible, title, children, onCancel }) => (
  <ModalWrapper visible={visible} onClick={onCancel}>
    <div className="content-modal">
      <div className="title"><h2>{title}</h2><i onClick={onCancel} class="fas fa-times"></i></div>
      <div className="body">
        {children}
      </div>
    </div>
  </ModalWrapper>
));

export default Modal;
