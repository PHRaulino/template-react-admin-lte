import React from 'react';

export default props => {

  return (

      <li className={`nav-item ${props.type ? 'has-treeview ' + props.type: '' }`}>
        <a href={props.link} className='nav-link'>
          <i className={`nav-icon ${props.icon}`}></i>
          <p>
            {props.showText}
            {props.type ? <i className="right fas fa-angle-left"></i>: ''}
          </p>
        </a>
        <ul className='nav nav-treeview'>
        {props.children}
        </ul>
      </li>
    
  )
}