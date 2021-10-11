import React from 'react';
import { Link } from 'react-router-dom';

const Modal = ({ visible, onVisible }) => {
  return (
    <div className={`modal-window flex-fill shadow ${visible ? 'modal-open' : ''}`}>
      <div className="modal-content">
        <div className="modal-body align-items-center justify-content-center">
          <p className="m-0 lead px-5">Data updated!</p>
        </div>
        <div className="modal-footer">
          <Link to='/'>
            <button
              onClick={onVisible}
              type="button"
              className="btn btn-outline-primary px-4"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;
