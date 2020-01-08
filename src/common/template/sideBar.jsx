import React from 'react';
import { MenuSideBar, LogoSideBar, SideBarItem, Tree } from '../elements/sidebar';

export default () => {

  return (

    <aside className='sidebar-wrapper main-sidebar sidebar-dark-primary elevation-4'>

      <LogoSideBar link='#' textShow='Santander' img='assets/logo-std.png' alt='Santander Logo' />

      <div className='sidebar'>

        <MenuSideBar>
          <SideBarItem showText='KPI Investimentos' icon='fas fa-tachometer-alt' type='menu' link='#'>
            <Tree showText='SubMenu' icon='fa fa-laptop' />
          </SideBarItem>
          <SideBarItem showText='Item' icon='fas fa-th' />
        </MenuSideBar>

      </div>
    </aside>

  )
}

