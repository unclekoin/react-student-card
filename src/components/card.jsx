import React from 'react';
import getData from '../utils/storage';
import getAge from '../utils/getAge';
import { Link } from 'react-router-dom';

const Card = () => {
  const { firstName, lastName, yearOfBirth, portfolio } = getData();

  return (
    <div className="row">
      <div className="d-flex flex-column">
        <h2 className="mb-2">Student Card</h2>
        <h5 className="mb-2">
          {firstName} {lastName}
        </h5>
        <p>
          {yearOfBirth} {getAge()}
        </p>
        <div className="mb-3">
          Portfolio:{' '}
          <a href={portfolio} target="_blank" rel="noreferrer">
            {portfolio}
          </a>
        </div>
        <Link className="btn btn-outline-primary w-100" to="/react-student-card/form">
          Edit
        </Link>
      </div>
    </div>
  );
};

export default Card;
