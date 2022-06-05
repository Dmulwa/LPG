import React, { useState, useEffect } from 'react';
import { BsFillArchiveFill, BsFillBellFill, BsFillMapFill } from 'react-icons/bs';

function Card({ title, icon, value = null, description = null }) {
  return (
    <div className='alert-card'>
      <div className='alert-card-inner'>
        <h3>{title}</h3>
        {icon && icon}
      </div>
      {value !== null && <h1>{value}</h1>}
      {description && <h4>{description}</h4>}
    </div>
  );
}

function Alert() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    // Simulate fetching alert data (replace with actual data retrieval logic)
    const mockAlerts = [
      { index: '1', site: 'KN001', meterNo: '008', type: 'Battery Low', state: 'Active' },
      { index: '2', site: 'KN001', meterNo: '016', type: 'Battery Low', state: 'Active' },
      { index: '3', site: 'KN001', meterNo: '002', type: 'Tamper', state: 'Active' },
      { index: '4', site: 'KN003', meterNo: '030', type: 'inactive', state: 'Active' },
      { index: '5', site: 'KN0010', meterNo: '003', type: 'Battery Low', state: 'Active' },
    ];

    setAlerts(mockAlerts);
  }, []);

  return (
    <section className='alert-container'>
      <div className='alert-title'>
        <h3>ALERTS</h3>
      </div>

      <div className='alert-cards'>
        <Card title='Back' description='Go back to the previous page' />
        <Card title='Total Alerts' icon={<BsFillArchiveFill className='card-icon' />} value={alerts.length} />
      </div>

      <div className='alert-list'>
        <h4>Alert Table</h4>
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Site Id</th>
              <th>Alert Type</th>
              <th>Meter No.</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {alerts.map((alert, index) => (
              <tr key={index}>
                <td>{alert.index}</td>
                <td>{alert.site}</td>
                <td>{alert.type}</td>
                <td>{alert.meterNo}</td>
                <td>{alert.state}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Alert;
