import React from 'react';
import { Link } from 'react-router-dom';

const Card = () => {
  return (
    <div className="card" style={{ width: '50%' }}>
      <div className="card-body fs-4">
        <div>
          <span className="pe-2 fw-bold">First Name:</span>
          <span>Ivan</span>
        </div>
        <div>
          <span className="pe-2 fw-bold">Last Name:</span>
          <span>Ivanov</span>
        </div>
        <div>
          <span className="pe-2 fw-bold">Year of Birth:</span>
          <span>1989 (32 years old)</span>
        </div>
        <div className="mb-3">
          <span className="pe-2 fw-bold">Portfolio:</span>
          <a href="https://google.com">https://google.com</a>
        </div>
        <Link to="create-edit">
          <button className="btn btn-primary">Edit</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
