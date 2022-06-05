import React, { useState } from 'react';
import { BsFillArchiveFill, BsFillBellFill, BsFillMapFill } from 'react-icons/bs';

function AddMeter() {
  // Define state variables for the form fields
  const [formData, setFormData] = useState({
    siteId: '',
    meterNo: '',
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

    // Clear the form fields after submission if needed
    setFormData({
      siteId: '',
      meterNo: '',
      date: '',
    });
  };

  // Handle form cancellation
  const handleCancel = () => {
    // Clear the form fields
    setFormData({
      siteId: '',
      meterNo: '',
      date: '',
    });
  };

  return (
    <section className='addMeter-container'>
      <div className='addMeter-title'>
        <h3>New Meter</h3>
      </div>
      <div className='addMeter-form'>
        {/* Form */}
        <form onSubmit={handleSubmit}>
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
            <label htmlFor='meterNo'>Meter No.:</label>
            <input
              type='text'
              id='meterNo'
              name='meterNo'
              value={formData.meterNo}
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
          <div className='form-buttons'>
            <button type='submit'>Submit</button>
            <button type='button' onClick={handleCancel}>Cancel</button>
          </div>
        </form>
        {/* End Form */}
      </div>
    </section>
  );
}

export default AddMeter;
