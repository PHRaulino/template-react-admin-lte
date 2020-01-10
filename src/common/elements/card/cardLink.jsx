import React from 'react';

export default props => {
  const { link, text } = props;
  return (
    <a href={link} className="small-box-footer">{text} <i className="fas fa-arrow-circle-right"></i></a>
  )
}