import React from 'react';
import {
  BsFillArchiveFill,
  BsFillBellFill,
  BsFillMapFill,
  BsPlusSquareFill,
} from 'react-icons/bs';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

// Sample data for the charts
const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function Card({ title, icon, value, description }) {
  return (
    <div className='view-meter-card'>
      <div className='view-meter-card-inner'>
        <h3>{title}</h3>
        {icon && icon}
      </div>
      {value && <h1>{value}</h1>}
      {description && <h4>{description}</h4>}
    </div>
  );
}

function viewMeter() {
  return (
    <div className='view-meter-container'>
      <div className='view-meter-title'>
        <h3>VIEW METER</h3>
      </div>
      <div>
        {/* Select site drop-down */}
        <select className='site-dropdown'>
        <option value='site1'>Site 1</option>
        <option value='site2'>Site 2</option>
        <option value='site3'>Site 3</option>
        {/* Add more options as needed */}
        </select>

        {/* Select meter drop-down */}
        <select className='meter-dropdown'>
        <option value='meter1'>Meter 1</option>
        <option value='meter2'>Meter 2</option>
        <option value='meter3'>Meter 3</option>
        {/* Add more options as needed */}
        </select>

      </div>
      <div className='view-meter-charts'>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey='pv' fill='#8884d8' />
            <Bar dataKey='uv' fill='#82ca9d' />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className='view-meter-cards'>
        <Card title='Site' icon={<BsFillArchiveFill className='view-meter-card-icon' />} value={55} />
        <Card
          title='Meter No.'
          icon={<BsFillMapFill className='view-meter-card-icon' />}
          value={4}
        />
        <Card
          title='Customer Id'
          icon={<BsFillBellFill className='view-meter-card-icon' />}
          value={3}
        />
        <Card
          title='Balance'
          icon={<BsFillBellFill className='view-meter-card-icon' />}
          value={3}
        />
        <Card
          title='Previous Reading'
          icon={<BsFillBellFill className='view-meter-card-icon' />}
          value={3}
        />
        <Card
          title='Status'
          icon={<BsPlusSquareFill className='view-meter-card-icon' />}
          value={'Active'}
        />
        {/* Link to billing Button */}
        <button className='billing-button'>
            Link to Billing
        </button>
      </div>
    </div>
  );
}

export default viewMeter;
