import React from 'react';

export default props => {
  return (
    <nav className='mt-2'>
      <ul className='nav nav-pills nav-sidebar flex-column' data-widget='treeview' role='menu'>
      {props.children}
      </ul>
    </nav>
  )
}