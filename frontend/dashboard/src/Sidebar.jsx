import React from 'react';
import {
  BsHouse,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <BsHouse className='icon_header' />MORAN-LPG
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <Link to='/Home'>
            <BsGrid1X2Fill className='icon' /> Dashboard
          </Link>
        </li>

        <li className='sidebar-list-item'>
          {/* Create a Link to the Meter component */}
          <Link to='/Meter'>
            <BsFillArchiveFill className='icon' /> Meter
          </Link>
        </li>

        <li className='sidebar-list-item'>
          <Link to='/Customer'>
            <BsPeopleFill className='icon' /> Customers
          </Link>
        </li>

        <li className='sidebar-list-item'>
          <Link to='/Inventory'>
            <BsListCheck className='icon' /> Inventory
          </Link>
        </li>

        <li className='sidebar-list-item'>
          <Link to='/Report'>
            <BsMenuButtonWideFill className='icon' /> Reports
          </Link>
        </li>

        <li className='sidebar-list-item'>
          <Link to='/Setting'>
            <BsFillGearFill className='icon' /> Settings
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
