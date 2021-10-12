import React from 'react';
import { Link } from 'react-router-dom';
import getData from '../utils/storage';
import Card from '../components/card';

const Home = () => {
  return (
    <>
      {!getData() ? (
        <div className="row">
          <div className="text-center p-5">
            <h1>Student Card</h1>
            <p className="fs-5">No data available</p>
            <Link className="btn btn-outline-primary px-5" to="/form">
              Add
            </Link>
          </div>
        </div>
      ) : (
        <Card />
      )}
    </>
  );
};

export default Home;
