import React from 'react';
import Chart from 'react-apexcharts';

const SparklineChart = ({ data, title }) => {
  const series = [{
    data: data.map(d => d.total)
  }];

  const options = {
    chart: {
      type: 'line',
      sparkline: { enabled: true }
    },
    title: { text: title, align: 'center' }
  };

  return <Chart options={options} series={series} type="line" height={100} />;
};

export default SparklineChart;
