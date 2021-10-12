import React from 'react';
import { Link } from 'react-router-dom';

const Modal = ({ visible, onVisible }) => {
  return (
    <div className={`modal-window shadow ${visible ? 'modal-open' : ''}`}>
      <div className="modal-content">
        <div className="modal-body text-center">
          <p className="mb-0 fs-4">Data updated!</p>
        </div>
        <div className="modal-footer">
          <Link to='/react-student-card/'>
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
