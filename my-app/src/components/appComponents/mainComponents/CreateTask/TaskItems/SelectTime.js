import { useState } from 'react';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import "./SelectTime.css"
// import 'react-clock/dist/Clock.css';

function SelectTime(props) {
  const [value, onChange] = useState('22:00');
props.setSelectedTime(value)
  return (
      <TimePicker onChange={onChange} value={value} locale='en-us'/>
  );
}
export default SelectTime;
