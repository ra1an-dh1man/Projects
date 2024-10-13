import React, { useState, useEffect } from 'react';
import DateSelector from './DateSelector';
import TimeSeriesChart from './TimeSeriesChart';
import ColumnChart from './ColumnChart';
import SparklineChart from './SparklineChart';
import csvToJson from './csvToJson';

const Dashboard = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    const jsonData = await csvToJson(file);
    setData(jsonData);
};

    useEffect(() => {
    if (startDate && endDate) {
        const filtered = data.filter(d =>
        new Date(d.arrival_date_year, d.arrival_date_month - 1, d.arrival_date_day_of_month) >= new Date(startDate) &&
        new Date(d.arrival_date_year, d.arrival_date_month - 1, d.arrival_date_day_of_month) <= new Date(endDate)
        );
        setFilteredData(filtered);
    } else {
        setFilteredData(data);
    }
    }, [startDate, endDate, data]);

    const visitorsPerDay = filteredData.reduce((acc, d) => {
    const date = `${d.arrival_date_year}-${d.arrival_date_month}-${d.arrival_date_day_of_month}`;
    acc[date] = (acc[date] || 0) + d.adults + d.children + d.babies;
    return acc;
    }, {});

    const visitorsPerCountry = filteredData.reduce((acc, d) => {
    acc[d.country] = (acc[d.country] || 0) + d.adults + d.children + d.babies;
    return acc;
    }, {});

    return (
    <div>
        <input className='fileInput' type="file" accept=".csv" onChange={handleFileUpload} />
        <DateSelector startDate={startDate} endDate={endDate} setStartDate={setStartDate} setEndDate={setEndDate} />
        <TimeSeriesChart data={Object.keys(visitorsPerDay).map(date => ({ date, totalVisitors: visitorsPerDay[date] }))} />
        <ColumnChart data={Object.keys(visitorsPerCountry).map(country => ({ country, visitors: visitorsPerCountry[country] }))} />
        <SparklineChart data={filteredData.map(d => ({ total: d.adults }))} title="Total Adult Visitors" />
        <SparklineChart data={filteredData.map(d => ({ total: d.children }))} title="Total Children Visitors" />
    </div>
    );
};

export default Dashboard;
