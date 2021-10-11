import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import validator from '../utils/validator';
import getData from '../utils/storage';
import TextField from '../components/text-field';

const CreateEdit = () => {
  const [data, setaData] = useState({
    firstName: '',
    lastName: '',
    yearOfBirth: '',
    portfolio: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = ({ target }) => {
    setaData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  const validatorConfig = {
    firstName: {isRequired: {message: 'First name is required'}},
    lastName: {isRequired: {message: 'Last name is required'}},
    yearOfBirth: {isRequired: {message: 'Year of birth is required'}},
    portfolio: {isRequired: {message: 'Portfolio URL is required'}},
  }

  useEffect(() => {
    validate();
    // eslint-disable-next-line
  }, [data]);

  const validate = () => {
    const errors = validator(data, validatorConfig);

    setErrors(errors);
    return !Object.keys(errors).length;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    localStorage.setItem('student', JSON.stringify(data));
    console.log(data);
  };

  return (
    <div className="row m-5">
      <h1 className="mb-3 text-center">{getData() ? 'Edit' : 'Create'}</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          label="First Name"
          name="firstName"
          value={data.firstName}
          error={errors.firstName}
          onChange={handleChange}
        />
        <TextField
          label="Last Name"
          name="lastName"
          value={data.lastName}
          error={errors.lastName}
          onChange={handleChange}
        />
        <TextField
          label="Year of Birth"
          type="number"
          name="yearOfBirth"
          value={data.yearOfBirth}
          error={errors.yearOfBirth}
          min={1930}
          max={2010}
          onChange={handleChange}
        />
        <TextField
          label="Portfolio"
          name="portfolio"
          value={data.portfolio}
          error={errors.portfolio}
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
