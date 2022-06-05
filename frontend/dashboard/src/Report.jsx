import React from 'react';
import { BsFillArchiveFill, BsFillBellFill, BsFillMapFill } from 'react-icons/bs';

function Report() {
  const [reportType, setReportType] = React.useState('Monthly');
  const [dateFromInput, setDateFromInput] = React.useState('');

  const handleReportTypeChange = (e) => {
    setReportType(e.target.value);
  };

  const handleDateFromInputChange = (e) => {
    setDateFromInput(e.target.value);
  };

  // Sample report data (you can replace this with your actual data)
  const reportData = [
    { index: 1, siteId: 'Site A', date: '2023-09-01', usage: 100, inventory: 50 },
    { index: 2, siteId: 'Site B', date: '2023-09-02', usage: 150, inventory: 45 },
    // Add more data as needed
  ];

  return (
    <section className='report-container'>
      <div className='report-title'>
        <h3>REPORTS</h3>
      </div>
      <div className='report-options'>
        {/* Select for Report Type */}
        <label htmlFor='reportType'>Report Type:</label>
        <select
          id='reportType'
          name='reportType'
          value={reportType}
          onChange={handleReportTypeChange}
        >
          <option value='Monthly'>Monthly</option>
          <option value='Yearly'>Yearly</option>
        </select>

        {/* Input for Date From */}
        <label htmlFor='dateFromInput'>Date From:</label>
        <input
          type='date'
          id='dateFromInput'
          name='dateFromInput'
          value={dateFromInput}
          onChange={handleDateFromInputChange}
        />
      </div>
      <div className='report-table'>
        <table>
          <thead>
            <tr>
              <th>Index</th>
              <th>SiteId</th>
              <th>Date</th>
              <th>Usage</th>
              <th>Inventory</th>
            </tr>
          </thead>
          <tbody>
            {reportData.map((item, index) => (
              <tr key={index}>
                <td>{item.index}</td>
                <td>{item.siteId}</td>
                <td>{item.date}</td>
                <td>{item.usage}</td>
                <td>{item.inventory}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Report;
