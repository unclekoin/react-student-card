import React from 'react';

const ModalOverlay = ({ visible }) => {
  return <div className={`modal-overlay${visible ? ' overlay-visible' : ''}`}></div>;
};

export default ModalOverlay;
