import React from 'react';

export default props => {

  return (

      <li className={`nav-item ${props.type ? 'has-treeview menu-open': '' }`}>
        <a href='/' className='nav-link'>
          <i className={`nav-icon ${props.icon}`}></i>
          <p>
            {props.showText}
          </p>
        </a>
        <ul className='nav nav-treeview'>
        {props.children}
        </ul>
      </li>
    
  )
}