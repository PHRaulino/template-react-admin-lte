import React from 'react';
import { Link, DropMenu, DropItem } from '../elements/navbar'
export default () => {

  return (
    <nav className='main-header navbar navbar-expand navbar-white navbar-light'>

      <ul className='navbar-nav'>

        <li className='nav-item'>
          <a className='nav-link' data-widget='pushmenu' href='./'><i className='fas fa-bars'></i></a>
        </li>

        <Link showText='Home' link='#' />
        <Link showText='DashBoard' link='#' />
        <DropMenu showText='Equipes' link='#'>
          <DropItem showTextChild='Private' linkChild='#' />
          <DropItem showTextChild='Ações' linkChild='#' />
          <DropItem showTextChild='Previdencia' linkChild='#'/>
        </DropMenu>

      </ul>
    </nav>

  )
}

