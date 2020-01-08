import React from 'react';
import { Link, DropMenu, DropItem, FormSearch } from '../elements/navbar'
export default () => {

  return (
    <nav className='main-header navbar navbar-expand navbar-white navbar-light'>

      <ul className='navbar-nav'>

        <li className='nav-item'>
          <a className='nav-link' data-widget='pushmenu' href='./'><i className='fas fa-bars'></i></a>
        </li>

        <Link showText='Home' link='#' />
        <Link showText='Contacts' link='#' />
        <DropMenu showText='Help' link='#'>
          <DropItem showTextChild='FAQ' linkChild='#' />
        </DropMenu>

      </ul>

      <FormSearch />

    </nav>

  )
}

