import React from 'react';

export default props => {
  const { children, center } = props;
  return (
    <div className={`row${center ? ' d-flex justify-content-center' : '' }`}>
      {children}
    </div>
  )
}