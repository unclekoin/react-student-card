import React from 'react';

const TextField = () => {
  return (
    <div className="mb-3">
      <label htmlFor="name" className="form-label">
        Name
      </label>
      <div className="input-group">
        <input type="text" className="form-control" id="name" />
      </div>
    </div>
  );
};

export default TextField;
