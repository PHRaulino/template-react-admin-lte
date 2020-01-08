import React from 'react';
import Link from '../elements/navbar/link';

export default () => {

  return (
    <nav className='main-header navbar navbar-expand navbar-white navbar-light'>

      <ul className='navbar-nav'>
        <li className='nav-item'>
          <a className='nav-link' data-widget='pushmenu' href='./'><i className='fas fa-bars'></i></a>
        </li>
    <Link showText='Home'/>
    <Link showText='Contacts'/>
      
        <li className='nav-item dropdown'>
          <a className='nav-link dropdown-toggle' href='./' id='navbarDropdown' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
            Help
              </a>
          <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
            <a className='dropdown-item' href='./'>FAQ</a>
            <a className='dropdown-item' href='./'>Support</a>
            <div className='dropdown-divider'></div>
            <a className='dropdown-item' href='./'>Contact</a>
          </div>
        </li>
      </ul>


      <form className='form-inline ml-3'>
        <div className='input-group input-group-sm'>
          <input className='form-control form-control-navbar' type='search' placeholder='Search' aria-label='Search'></input>
          <div className='input-group-append'>
            <button className='btn btn-navbar' type='submit'>
              <i className='fas fa-search'></i>
            </button>
          </div>
        </div>
      </form>


    </nav>

  )
}

