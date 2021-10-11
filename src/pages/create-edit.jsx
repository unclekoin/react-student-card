import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import getData from '../utils/storage';
import TextField from '../components/text-field';

const CreateEdit = () => {
  const [data, setaData] = useState({
    firstName: '',
    lastName: '',
    yearOfBirth: '',
    portfolio: '',
  });

  const [errors, setErrors] = useState();

  const handleChange = ({ target }) => {
    setaData((prevStat) => ({ ...prevStat, [target.name]: target.value }));
  };

  useEffect(() => {
    validate();
  }, [data]);

  const validate = () => {
    const errors = {};

    for (const fieldName in data) {
      if (data[fieldName].trim()) {
        errors[fieldName] = `${fieldName} is required`;
      }
    }

    setErrors(errors);
    return Object.keys(errors).length;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    localStorage.setItem('student', JSON.stringify(data));
    if (!isValid) return;
  };


  return (
    <div className="row m-5">
      <h1 className="mb-3 text-center">{getData ? 'Edit' : 'Create'}</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          label="First Name"
          name="firstName"
          value={data.firstName}
          onChange={handleChange}
        />
        <TextField
          label="Last Name"
          name="lastName"
          value={data.lastName}
          onChange={handleChange}
        />
        <TextField
          label="Year of Birth"
          type="number"
          name="yearOfBirth"
          value={data.yearOfBirth}
          min={1930}
          max={2010}
          onChange={handleChange}
        />
        <TextField
          label="Portfolio"
          name="portfolio"
          value={data.portfolio}
          onChange={handleChange}
        />
        <button className="btn btn-primary">Create</button>
      </form>
      <div className="mt-3">
        <Link to="/">
          <button className="btn btn-outline-danger flex-grow-0">Home</button>
        </Link>
      </div>
    </div>
  );
};

export default CreateEdit;
