import React from 'react';
import { Link } from 'react-router-dom';
import getData from '../utils/storage';
import Card from '../components/card';

const Home = () => {
  return (
    <div className="row m-5">
      {!getData() ? (
        <div>
          <h1>Student Card</h1>
          <p>No data available</p>
          <Link to="create-edit">
            <button className="btn btn-primary">Add</button>
          </Link>
        </div>
      ) : (
        <Card />
      )}
    </div>
  );
};

export default Home;
