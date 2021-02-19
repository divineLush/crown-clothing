import React from 'react';

import './spinner.scss';

// high order component
const Spinner = WrappedComponent => ({ isLoading, ...props }) => (
  isLoading
    ? <div className="spinner"></div>
    : <WrappedComponent { ...props } />
);

export default Spinner;
