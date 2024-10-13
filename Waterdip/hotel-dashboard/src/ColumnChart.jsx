import React from 'react';
import Chart from 'react-apexcharts';

const ColumnChart = ({ data }) => {
  const series = [{
    name: 'Visitors',
    data: data.map(d => d.visitors)
  }];

  const options = {
    chart: { type: 'bar' },
    xaxis: {
      categories: data.map(d => d.country)
    }
  };

  return <Chart options={options} series={series} type="bar" height={350} />;
};

export default ColumnChart;
