import React from 'react';

const DateSelector = ({ startDate, endDate, setStartDate, setEndDate }) => {
  return (
    <div>
      <input className='dateSet' type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      <input className='dateSet' type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
    </div>
  );
};

export default DateSelector;
