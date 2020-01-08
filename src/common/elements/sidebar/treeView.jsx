import React from 'react';

export default props => {
  return (

    <li className='nav-item'>
      <a href='/' className='nav-link'>
        <i className={`nav-icon ${props.icon}`}></i>
        <p>{props.showText}</p>
      </a>
    </li>

  )
}