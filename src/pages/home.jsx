import React from 'react';
import { Link } from 'react-router-dom';
import getData from '../utils/storage';
import Card from '../components/card';

const Home = () => {
  return (
    <>
      {!getData() ? (
        <div className="text-center p-5 shadow bg-body rounded">
          <h1>Student Card</h1>
          <p className="fs-5">No data available</p>
          <Link to="/form">
            <button className="btn btn-outline-primary w-100">Add</button>
          </Link>
        </div>
      ) : (
        <Card />
      )}
    </>
  );
};

export default Home;
