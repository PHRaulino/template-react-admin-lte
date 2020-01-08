import React from 'react';

export default props => {
  return (
    <a className='dropdown-item' href={props.linkChild}>{props.showTextChild}</a>
  )
}