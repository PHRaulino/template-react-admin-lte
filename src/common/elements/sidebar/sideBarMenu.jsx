import React from 'react';
import SideBarItem from './sideBarItem';
import Tree from './treeView';

export default () => {
  return (
    <nav className='mt-2'>
      <ul className='nav nav-pills nav-sidebar flex-column' data-widget='treeview' role='menu'>
        <SideBarItem showText='KPI Investimentos' icon='fas fa-tachometer-alt' type='menu'>
          <Tree showText='SubMenu' icon='fa fa-laptop'/>
          <Tree showText='SubMenu' icon='fa fa-phone'/>
        </SideBarItem>
        <SideBarItem showText='Item' icon='fas fa-th'/>
      </ul>
    </nav>
  )
}