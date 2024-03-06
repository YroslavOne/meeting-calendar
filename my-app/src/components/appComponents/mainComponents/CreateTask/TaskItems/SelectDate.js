import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "./SelectDate.css";

import "react-datepicker/dist/react-datepicker.css";

function SelectDate(props) {
  const [startDate, setStartDate] = useState(props.selectedDate);

  const dayForWeek = [
    { dayWeek: "sun" },
    { dayWeek: "mon" },
    { dayWeek: "tue" },
    { dayWeek: "wed" },
    { dayWeek: "thu" },
    { dayWeek: "fri" },
    { dayWeek: "sat" },
  ];

  props.setSelectedDate(startDate);
  let dayWeek = dayForWeek[startDate.getDay()].dayWeek;
  let month = startDate.toLocaleString("en", { month: "long" });
  let day = startDate.getDate();
  if (props.interactionWithTask) {
    return (
      <div className="data-no-edit">
        {dayWeek}, {month} {day}
      </div>
    );
  } else {
    return (
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="E ,MMMM d"
      />
    );
  }
}
export default SelectDate;
