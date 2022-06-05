import React, { useState, useEffect } from 'react';
import { BsFillArchiveFill, BsFillBellFill, BsFillMapFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Customer() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    // Simulate fetching customer data (replace with actual data retrieval logic)
    const mockCustomers = [
      { index: '1', name: 'Customer 1', contact: 'Contact 1', meterNo: 'Meter 1', siteBalance: 'Balance 1' },
      { index: '2',name: 'Customer 2', contact: 'Contact 2', meterNo: 'Meter 2', siteBalance: 'Balance 2' },
      { index: '3',name: 'Customer 3', contact: 'Contact 3', meterNo: 'Meter 3', siteBalance: 'Balance 3' },
    ];

    setCustomers(mockCustomers);
  }, []);

  return (
    <section className='customer-container'>
      <div className='customer-title'>
        <h3>CUSTOMERS</h3>
      </div>
      <div className='meter-cards'>
        <div className='meter-card'>
          <Link to="/Customer" className="meter-link">
          <div className='card-inner'>
            <h3>Total Customers</h3>
            <BsFillArchiveFill className='card-icon' />
          </div>
          <h1>55</h1>
          </Link>
        </div> 
        <div className='meter-card'>
          <Link to="/components/invoicing" className="meter-link">
          <div className='card-inner'>
            <h3>Customer Invoices</h3>
            <BsFillArchiveFill className='card-icon' />
          </div>
          <h3>New Invoice</h3>
          </Link>
        </div>         
        <div className='meter-card'>
          <Link to="/components/billing" className="meter-link">
          <div className='card-inner'>
            <h3>Billing</h3>
            <BsFillArchiveFill className='card-icon' />
          </div>
          <h3>New Bill</h3>
          </Link>
        </div> 
        <div className='meter-card'>
          <Link to="/components/newCustomer" className="meter-link">
          <div className='card-inner'>
            <h3>Add New Customer</h3>
            <BsFillArchiveFill className='card-icon' />
          </div>
          <h3>New customer registration</h3>
          </Link>
        </div> 
        
      </div>

      <div className='customer-list'>
        <h4>Customer Table</h4>
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>NAME</th>
              <th>CONTACT</th>
              <th>METER NO.</th>
              <th>BALANCE</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr key={index}>
                <td>{customer.index}</td>
                <td>{customer.name}</td>
                <td>{customer.contact}</td>
                <td>{customer.meterNo}</td>
                <td>{customer.siteBalance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Customer;
