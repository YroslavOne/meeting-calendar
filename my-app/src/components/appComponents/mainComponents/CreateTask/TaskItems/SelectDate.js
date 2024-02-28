import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import './SelectDate.css';

import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

function SelectDate(props) {
  const [startDate, setStartDate] = useState(props.selectedDate);
  props.setSelectedDate(startDate);

  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      dateFormat="E ,MMMM d"
    />
  );
}
export default SelectDate;
