import React from 'react';

export default props => {
  return (
  <div className={`row${props.center ? ' d-flex justify-content-center' : ''}`} >{props.children}</div>
  )
}