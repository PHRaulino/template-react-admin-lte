import React from 'react';

export default props => {
  return (
    <a href={props.link} className='brand-link'>
      <img src={props.img} alt={props.alt} className='brand-image img-circle elevation-3'></img>
      <span className='brand-text font-weight-light'>{props.textShow}</span>
    </a>
  )
}