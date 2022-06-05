import React from 'react';
import { BsFillArchiveFill, BsFillBellFill, BsFillMapFill } from 'react-icons/bs';

function Billing() {
  const [siteId, setSiteId] = React.useState('');
  const [meterNo, setMeterNo] = React.useState('');
  const [date, setDate] = React.useState('');
  const [customerEmail, setCustomerEmail] = React.useState('customer@example.com');
  const [status, setStatus] = React.useState('Pending');
  const [previousReading, setPreviousReading] = React.useState('');
  const [currentReading, setCurrentReading] = React.useState('');
  const [amount, setAmount] = React.useState('');

  const handleSiteIdChange = (e) => {
    setSiteId(e.target.value);
  };

  const handleMeterNoChange = (e) => {
    setMeterNo(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handlePreviousReadingChange = (e) => {
    setPreviousReading(e.target.value);
  };

  const handleCurrentReadingChange = (e) => {
    setCurrentReading(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission here and send the data to your backend
    // For now, let's log the data to the console
    console.log({
      siteId,
      meterNo,
      date,
      customerEmail,
      status,
      previousReading,
      currentReading,
      amount,
    });
  };

  const handleCancel = () => {
    // You can add code to clear the form fields or handle cancel actions
    // For now, let's clear the form fields
    setSiteId('');
    setMeterNo('');
    setDate('');
    setPreviousReading('');
    setCurrentReading('');
    setAmount('');
  };

  return (
    <section className='billing-container'>
      <div className='billing-title'>
        <h3>New Bill</h3>
      </div>
      <form className='billing-form' onSubmit={handleSubmit}>
        {/* Select for SiteId */}
        <div className='form-field'>
          <label htmlFor='siteId'>SiteId:</label>
          <select
            id='siteId'
            name='siteId'
            value={siteId}
            onChange={handleSiteIdChange}
            required
          >
            <option value='Site A'>Site A</option>
            <option value='Site B'>Site B</option>
            {/* Add more options as needed */}
          </select>
        </div>

        {/* Select for Meter No. */}
        <div className='form-field'>
          <label htmlFor='meterNo'>Meter No.:</label>
          <select
            id='meterNo'
            name='meterNo'
            value={meterNo}
            onChange={handleMeterNoChange}
            required
          >
            <option value='Meter 1'>Meter 1</option>
            <option value='Meter 2'>Meter 2</option>
            {/* Add more options as needed */}
          </select>
        </div>

        {/* Date input */}
        <div className='form-field'>
          <label htmlFor='date'>Date:</label>
          <input
            type='date'
            id='date'
            name='date'
            value={date}
            onChange={handleDateChange}
            required
          />
        </div>

        {/* Auto-filled fields */}
        <div className='form-field'>
          <label htmlFor='customerEmail'>Customer Email:</label>
          <input
            type='text'
            id='customerEmail'
            name='customerEmail'
            value={customerEmail}
            readOnly
          />
        </div>
        <div className='form-field'>
          <label htmlFor='status'>Status:</label>
          <input
            type='text'
            id='status'
            name='status'
            value={status}
            readOnly
          />
        </div>

        {/* Auto-filled fields (continued) */}
        <div className='form-field'>
          <label htmlFor='previousReading'>Previous Reading:</label>
          <input
            type='text'
            id='previousReading'
            name='previousReading'
            value={previousReading}
            readOnly
          />
        </div>
        <div className='form-field'>
          <label htmlFor='currentReading'>Current Reading:</label>
          <input
            type='text'
            id='currentReading'
            name='currentReading'
            value={currentReading}
            readOnly
          />
        </div>
        <div className='form-field'>
          <label htmlFor='amount'>Amount:</label>
          <input
            type='text'
            id='amount'
            name='amount'
            value={amount}
            readOnly
          />
        </div>

        {/* Buttons */}
        <div className='form-actions'>
          <button type='submit'>Submit</button>
          <button type='button' onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </section>
  );
}

export default Billing;
