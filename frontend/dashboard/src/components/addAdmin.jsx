import React, { useState } from 'react';
import { BsFillArchiveFill, BsFillBellFill, BsFillMapFill } from 'react-icons/bs';

function NewAdmin() {
  // Define state variables for the form fields
  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    email: '',
    phoneNumber: '',
    privilegeLevel: '',
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
      email: '',
      phoneNumber: '',
      privilegeLevel: '',
    });
  };

  // CSS styles for the "Add Admin" page
  const pageStyles = {
    backgroundColor: '#1d2634',
    color: '#eef3f8',
    fontFamily: 'Montserrat, sans-serif',
    padding: '20px',
  };

  const formStyles = {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  };

  const titleStyles = {
    textAlign: 'center',
    marginBottom: '20px',
  };

  const labelStyles = {
    fontWeight: 'bold',
    display: 'block',
    marginBottom: '5px',
    fontSize: '18px',
  };

  const inputStyles = {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '1rem',
  };

  const selectStyles = {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const buttonStyles = {
    padding: '10px 20px',
    backgroundColor: '#2962ff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
  };

  const cancelButtonStyles = {
    backgroundColor: '#ccc',
    color: '#333',
  };

  return (
    <div style={pageStyles}>
      <section style={formStyles}>
        <div style={titleStyles}>
          <h3>Add User</h3>
        </div>
        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div style={labelStyles}>First Name:</div>
          <input
            type='text'
            name='firstName'
            value={formData.firstName}
            onChange={handleInputChange}
            required
            style={inputStyles}
          />
          <div style={labelStyles}>Surname:</div>
          <input
            type='text'
            name='surname'
            value={formData.surname}
            onChange={handleInputChange}
            required
            style={inputStyles}
          />
          <div style={labelStyles}>Email:</div>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleInputChange}
            required
            style={inputStyles}
          />
          <div style={labelStyles}>Phone Number:</div>
          <input
            type='tel'
            name='phoneNumber'
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
            style={inputStyles}
          />
          <div style={labelStyles}>Privilege Level:</div>
          <select
            name='privilegeLevel'
            value={formData.privilegeLevel}
            onChange={handleInputChange}
            required
            style={selectStyles}
          >
            <option value='' disabled>Select Privilege Level</option>
            <option value='admin'>Admin</option>
            <option value='user'>User</option>
            {/* Add more options as needed */}
          </select>
          <div style={{ marginTop: '20px' }}>
            <button type='submit' style={buttonStyles}>
              Submit
            </button>
            <button type='button' style={{ ...buttonStyles, ...cancelButtonStyles }}>
              Cancel
            </button>
          </div>
        </form>
        {/* End Form */}
      </section>
    </div>
  );
}

export default NewAdmin;
