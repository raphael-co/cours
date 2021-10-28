import React, { useState } from 'react';
// eslint-disable-next-line 
import { Link } from 'react-router-dom';
// eslint-disable-next-line 
// import { SidebarData } from './SideMenuData';
import style from './Navbar.module.css'

function Navbar(value) {
  
  return (
    <>
        <nav className={value.value ? `${style.navmenuactive}` : `${style.navmenu}`}>

          <div><p>test</p></div>
          
       
        </nav>
    </>
  );
}
 
export default Navbar;