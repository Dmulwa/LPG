import React, { useState } from 'react';
import { BsFillArchiveFill, BsFillBellFill, BsFillMapFill } from 'react-icons/bs';

function Site() {
  // Define state variables for the form fields
  const [formData, setFormData] = useState({
    siteName: '',
    phoneNumber: '',
    emailAddress: '',
    physicalAddress: '',
    mainMeterNo: '',
    date: '',
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
  };

  return (
    <section className='site-container'>
      <div className='site-title'>
        <h3>REPORTS</h3>
      </div>
      <div className='site-form'>
        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='siteName'>Site Name:</label>
            <input
              type='text'
              id='siteName'
              name='siteName'
              value={formData.siteName}
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
            <label htmlFor='emailAddress'>Email Address:</label>
            <input
              type='email'
              id='emailAddress'
              name='emailAddress'
              value={formData.emailAddress}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='physicalAddress'>Physical Address:</label>
            <input
              type='text'
              id='physicalAddress'
              name='physicalAddress'
              value={formData.physicalAddress}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='mainMeterNo'>Main Meter No.:</label>
            <input
              type='text'
              id='mainMeterNo'
              name='mainMeterNo'
              value={formData.mainMeterNo}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='date'>Date:</label>
            <input
              type='date'
              id='date'
              name='date'
              value={formData.date}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type='submit'>Submit</button>
        </form>
        {/* End Form */}
      </div>
    </section>
  );
}

export default Site;

