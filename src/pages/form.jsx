import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import validator from '../utils/validator';
import getData from '../utils/storage';
import TextField from '../components/text-field';
import Modal from '../components/modal';
import ModalOverlay from '../components/modal-overlay';

const initalState = {
  firstName: '',
  lastName: '',
  yearOfBirth: '',
  portfolio: '',
};

const Form = () => {
  const [data, setaData] = useState(getData() || initalState);
  const [errors, setErrors] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const handleChange = ({ target }) => {
    setaData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  const validatorConfig = {
    firstName: {
      isRequired: { message: 'First name is required' },
      isValidName: {
        message: 'Field must contain at least 3 and no more than 20 characters',
      },
    },
    lastName: { isRequired: { message: 'Last name is required' } },
    yearOfBirth: {
      isRequired: { message: 'Year of birth is required' },
      isValidYear: {
        message: `Value should not be less than 1930 and more than ${new Date(
          Date.now()
        ).getFullYear()}`,
      },
    },
    portfolio: {
      isRequired: { message: 'Portfolio URL is required' },
      isURL: { message: 'URL is not entered correctly' },
    },
  };

  useEffect(() => {
    validate();
    // eslint-disable-next-line
  }, [data]);

  const validate = () => {
    const errors = validator(data, validatorConfig);

    setErrors(errors);
    return !Object.keys(errors).length;
  };

  const isValid = !Object.keys(errors).length;

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    localStorage.setItem('student', JSON.stringify(data));
  };

  const handleModal = () => {
    setModalVisible((prevState) => !prevState);
  };

  return (
    <>
      <ModalOverlay visible={modalVisible} />
      <Modal visible={modalVisible} onVisible={handleModal} />

      <div className="flex-fill">
        <h2 className="mb-3 text-center">{getData() ? 'Edit' : 'Create'}</h2>
        <form onSubmit={handleSubmit} noValidate>
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
            max={new Date(Date.now()).getFullYear()}
            onChange={handleChange}
          />
          <TextField
            label="Portfolio"
            name="portfolio"
            value={data.portfolio}
            error={errors.portfolio}
            onChange={handleChange}
          />
          <div>
            <Link to="/">
              <button className="btn btn-outline-secondary flex-grow-0 px-4 me-2 mb-2">
                Home
              </button>
            </Link>
            <button
              onClick={handleModal}
              className="btn btn-outline-primary px-4 mb-2"
              disabled={!isValid}
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
