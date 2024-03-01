import { useState } from 'react';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import './SelectTime.css';
import TimeWhithColon from './TimeWhithСolon';
// import 'react-clock/dist/Clock.css';

function SelectTime(props) {
  const [value, onChange] = useState(props.selectedTime);
  props.setSelectedTime(value);
  // const hour =  value[1] === ":" ? '0' + value[0] : value[0] + value[1];
  // const twelveHour = hour > 12 ? hour - 12 : hour;
  // const minut = value[4] === undefined ? '0' + value[3] : value[3] + value[4];
  // const prepand = hour > 12 ? ' PM ' : ' AM ';
  if (props.interactionWithTask) {
    return (
      // <div className="style-no-edit-timer">
      //   {twelveHour}
      //   <span >:</span>
      //   {minut} {prepand}
      // </div>
      <TimeWhithColon value={value}/>
    );
  } else {
    return <TimePicker onChange={onChange} value={value} locale="en-us" />;
  }
  return;
}
export default SelectTime;
