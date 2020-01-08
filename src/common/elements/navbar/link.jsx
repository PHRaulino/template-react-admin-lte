import React from 'react';

export default props => {
  return (
    <li className='nav-item d-none d-sm-inline-block'>
          <a href={props.link} className='nav-link'>{props.showText}</a>
        </li>
  )
}