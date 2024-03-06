import { useState } from "react";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "./SelectTime.css";
import TimeWhithColon from "./TimeWhithСolon";

function SelectTime(props) {
  const [value, onChange] = useState(props.selectedTime);
  props.setSelectedTime(value);

  if (props.interactionWithTask) {
    return <TimeWhithColon value={value} />;
  } else {
    return <TimePicker onChange={onChange} value={value} locale="en-us" />;
  }
}
export default SelectTime;
