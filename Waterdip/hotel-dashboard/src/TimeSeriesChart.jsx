import React from 'react';
import Chart from 'react-apexcharts';

const TimeSeriesChart = ({ data }) => {
  const series = [{
    name: 'Visitors',
    data: data.map(d => ({ x: new Date(d.date), y: d.totalVisitors }))
  }];

  const options = {
    chart: {
      type: 'line',
      zoom: { enabled: true }
    },
    xaxis: { type: 'datetime' }
  };

  return <Chart options={options} series={series} type="line" height={350} />;
};

export default TimeSeriesChart;
