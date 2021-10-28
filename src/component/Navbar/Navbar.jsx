import React, { useState } from 'react';
// eslint-disable-next-line 
import { Link } from 'react-router-dom';
// eslint-disable-next-line 
// import { SidebarData } from './SideMenuData';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
// eslint-disable-next-line 
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
        <div className='navbar'>

        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        
        </nav>
    </>
  );
}
 
export default Navbar;