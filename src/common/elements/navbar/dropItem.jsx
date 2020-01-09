import React from 'react';

export default props => {
  return (
    <div>
      {props.div ? <div class="dropdown-divider"></div>:''}
      <a className='dropdown-item' href={props.linkChild}>{props.showTextChild}</a>
    </div>
  )
}