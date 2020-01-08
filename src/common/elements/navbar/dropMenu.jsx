import React from 'react';

export default props => {
  return (
    <li className='nav-item dropdown'>
      <a className='nav-link dropdown-toggle' href={props.link} id='navbarDropdown' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
        {props.showText}
              </a>
      <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
        {React.Children.map(props.children,
          child => React.cloneElement(child, { ...props }))}
      </div>
    </li>
  )
}