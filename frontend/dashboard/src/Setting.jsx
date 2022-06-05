import React from 'react';
import { BsFillArchiveFill, BsFillBellFill, BsFillMapFill, BsPlusSquareFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Setting() {
  return (
    <section className='setting-container'>
      <div className='setting-title'>
        <h3>SETTINGS</h3>
      </div>
      <div className='setting-cards'>
      <div className='meter-card'>
          <Link to="/Setting" className="meter-link">
          <div className='card-inner'>
            <h3>Total Users</h3>
            <BsFillArchiveFill className='card-icon' />
          </div>
          <h1>3</h1>
          </Link>
        </div>        
       
        <div className='meter-card'>
          <Link to="/components/addAdmin" className="meter-link">
          <div className='card-inner'>
            <h3>Add Admin</h3>
            <BsFillArchiveFill className='card-icon' />
          </div>
          <h3>Add New User</h3>
          </Link>
        </div>
        <div className='meter-card'>
          <Link to="/Setting" className="meter-link">
          <div className='card-inner'>
            <h3>Delete User</h3>
            <BsFillArchiveFill className='card-icon' />
          </div>
          <h1>5</h1>
          </Link>
        </div>        

        <div className='meter-card'>
          <Link to= "/Setting" className="meter-link">
          <div className='card-inner'>
            <h3>Change Password</h3>
            <BsPlusSquareFill  className='card-icon' />
          </div>
          <h3>Add a new meter</h3>
          </Link>
        </div>
      </div>  
    </section>
  );
}

export default Setting;
