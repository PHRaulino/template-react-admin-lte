import React from 'react';

export default props => {
  return (
    <footer className='main-footer'>
      <strong>Copyright &copy; {props.years} <a href={props.link}>{props.company}</a>. </strong>
      All rights reserved.
    <div className='float-right d-none d-sm-inline-block'>
        <b>Version</b> {props.version}
      </div>
    </footer>
  )
}