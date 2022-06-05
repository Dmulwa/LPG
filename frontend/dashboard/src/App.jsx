import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary components from react-router-dom
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';
import Meter from './Meter'; // Import your Meter component
import Customer from './Customer';
import Inventory from './Inventory';
import Report from './Report';
import Setting from './Setting';
import Alert from './Alert';
import viewMeter from './viewMeter';
import addAdmin from './components/addAdmin'
import billing from './components/billing'
import invoicing from './components/invoicing'
import newCustomer from './components/newCustomer'
import newMeter from './components/newMeter'
import site from './components/site'

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <Router> {/* Wrap your entire app with the Router */}
      <div className='grid-container'>
        <Header OpenSidebar={OpenSidebar} />
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Meter" element={<Meter />} />
          <Route path="/Customer" element={<Customer />} />
          <Route path="/Inventory" element={<Inventory />} />
          <Route path="/Report" element={<Report />} />
          <Route path="/Setting" element={<Setting />} />
          <Route path="/viewMeter" element={<viewMeter />} />
          <Route path="/Alert" element={<Alert />} />
          <Route path="/component/addAdmin" element={<addAdmin />} />
          <Route path="/component/billig" element={<billing />} />
          <Route path="/component/invoicing" element={<invoicing />} />
          <Route path="/component/newCustomer" element={<newCustomer />} />
          <Route path="/component/newMeter" element={<newMeter />} />
          <Route path="/component/site" element={<site />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
