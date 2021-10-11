import React from 'react';
import getData from '../utils/storage';
import getAge from '../utils/getAge';
import { Link } from 'react-router-dom';

const Card = () => {
  const { firstName, lastName, yearOfBirth, portfolio } = getData();

  return (
    <div className="p-5 flex-fill shadow rounded">
      <h2 className="mb-3">
      Student Card
      </h2>
      <h4 className="mb-3">
        {firstName} {lastName}
      </h4>
      <p>
        {yearOfBirth} {getAge()}
      </p>
      <div className="mb-4">
        Portfolio:{' '}
        <a href={portfolio} target="_blank" rel="noreferrer">
          {portfolio}
        </a>
      </div>
      <Link to="/form">
        <button className="btn btn-outline-primary px-5">Edit</button>
      </Link>
    </div>
  );
};

export default Card;
