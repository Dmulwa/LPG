import React, { useState } from 'react';
import { BsFillArchiveFill, BsFillBellFill, BsFillMapFill } from 'react-icons/bs';

function NewCustomer() {
  // Define state variables for the form fields
  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    siteId: '',
    email: '',
    phoneNumber: '',
    meterNo: '',
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can access the form data in the 'formData' object
    console.log('Form Data:', formData);
    // Perform any necessary actions with the form data here

    // Clear the form fields after submission if needed
    setFormData({
      firstName: '',
      surname: '',
      siteId: '',
      email: '',
      phoneNumber: '',
      meterNo: '',
    });
  };

  return (
    <section className='newCustomer-container'>
      <div className='newCustomer-title'>
        <h3>New Customer</h3>
      </div>
      <div className='newCustomer-form'>
        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='firstName'>First Name:</label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='surname'>Surname:</label>
            <input
              type='text'
              id='surname'
              name='surname'
              value={formData.surname}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='siteId'>Site ID:</label>
            <select
              id='siteId'
              name='siteId'
              value={formData.siteId}
              onChange={handleInputChange}
              required
            >
              <option value='' disabled>Select Site ID</option>
              <option value='site1'>Site 1</option>
              <option value='site2'>Site 2</option>
              <option value='site3'>Site 3</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='phoneNumber'>Phone Number:</label>
            <input
              type='tel'
              id='phoneNumber'
              name='phoneNumber'
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='meterNo'>Meter No.:</label>
            <select
              id='meterNo'
              name='meterNo'
              value={formData.meterNo}
              onChange={handleInputChange}
              required
            >
              <option value='' disabled>Select Meter No.</option>
              <option value='meter1'>Meter 1</option>
              <option value='meter2'>Meter 2</option>
              <option value='meter3'>Meter 3</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <button type='submit'>Submit</button>
        </form>
        {/* End Form */}
      </div>
    </section>
  );
}

export default NewCustomer;
