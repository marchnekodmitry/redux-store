import React from 'react';
import './spinner.css';

const Spinner = () => {
  return (
      <div className="d-flex align-items-center">
        <strong>Loading...</strong>
        <div className="spinner-border ml-auto spinner" role="status" aria-hidden="true" />
      </div>
  );
};

export default Spinner;