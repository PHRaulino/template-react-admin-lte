import React from 'react';
import MenuSideBar from '../elements/sidebar/sideBarMenu'
export default () => {

  return (

    <aside className='sidebar-wrapper main-sidebar sidebar-dark-primary elevation-4'>
      <a href='index3.html' className='brand-link'>
        <img src='assets/logo-std.png' alt='Santander Logo' class='brand-image img-circle elevation-3'></img>
        <span className='brand-text font-weight-light'>Santander</span>
      </a>
      <div className='sidebar'>
        <MenuSideBar />
      </div>
    </aside>

  )
}

