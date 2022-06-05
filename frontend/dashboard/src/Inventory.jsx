import React from 'react';
import { BsFillArchiveFill, BsPlusSquareFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Inventory() {
  // Simulated inventory data
  const inventoryData = [
    { number: 1, site: 'Site 1', inventory: 'Inventory 1', date: '2023-09-25', contact: 'Contact 1' },
    { number: 2, site: 'Site 2', inventory: 'Inventory 2', date: '2023-09-26', contact: 'Contact 2' },
    { number: 3, site: 'Site 3', inventory: 'Inventory 3', date: '2023-09-27', contact: 'Contact 3' },
    { number: 4, site: 'Site 4', inventory: 'Inventory 4', date: '2023-09-28', contact: 'Contact 4' },
    { number: 5, site: 'Site 5', inventory: 'Inventory 5', date: '2023-09-29', contact: 'Contact 5' },
  ];

  return (
    <section className='inventory-container'>
      <div className='inventory-title'>
        <h3>INVENTORY</h3>
      </div>
      <div className='inventory-cards'>
        <div className='inventory-card'>
          <Link to="/Inventory" className="inventory-link">
            <div className='inventory-card-inner'>
              <h3>Locations</h3>
              <BsFillArchiveFill className='inventory-card-icon' />
            </div>
            <h1>5</h1>
          </Link>
        </div>        
       
        <div className='inventory-card'>
          <Link to="/Meter" className="inventory-link">
            <div className='inventory-card-inner'>
              <h3>Total Meters</h3>
              <BsFillArchiveFill className='inventory-card-icon' />
            </div>
            <h1>5</h1>
          </Link>
        </div>
        <div className='inventory-card'>
          <Link to="/Report" className="inventory-link">
            <div className='inventory-card-inner'>
              <h3>Total inventory</h3>
              <BsFillArchiveFill className='inventory-card-icon' />
            </div>
            <h1>300</h1>
          </Link>
        </div>        

        <div className='inventory-card'>
          <Link to="/components/site" className="inventory-link">
            <div className='inventory-card-inner'>
              <h3>New Stock</h3>
              <BsPlusSquareFill className='inventory-card-icon' />
            </div>
            <h3>Take delivery</h3>
          </Link>
        </div>
      </div>

      <div className='inventory-table'>
        {/* Add the table here */}
        <h4>Inventory Table</h4>
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Site</th>
              <th>Inventory</th>
              <th>Date</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            {inventoryData.map((item, index) => (
              <tr key={index}>
                <td>{item.number}</td>
                <td>{item.site}</td>
                <td>{item.inventory}</td>
                <td>{item.date}</td>
                <td>{item.contact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Inventory;
