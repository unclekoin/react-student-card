import React from 'react';
import TextField from '../components/text-field';

const CreateEdit = () => {
  return (
    <div className="row m-5">
      <h1 className="mb-3 text-center">Create</h1>
      <form>
        <TextField  />
        <button className="btn btn-primary">Create</button>
      </form>
    </div>
  );
};

export default CreateEdit;
