import React from 'react';
import { BsFillArchiveFill, BsFillBellFill, BsFillMapFill } from 'react-icons/bs';

function Invoicing() {
  const [reportType, setReportType] = React.useState('Monthly');
  const [dateFromInput, setDateFromInput] = React.useState('');

  const handleReportTypeChange = (e) => {
    setReportType(e.target.value);
  };

  const handleDateFromInputChange = (e) => {
    setDateFromInput(e.target.value);
  };

  return (
    <section className='Invoicing-container'>
      <div className='Invoicing-title'>
        <h3>New Bill</h3>
      </div>
      <div className=''>
        /* add code to add field*/
      </div>
    </section>
  );
}

export default Invoicing;