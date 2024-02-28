import { GeoAlt, TextLeft } from 'react-bootstrap-icons';
import MeetingType from './TaskItems/MeetingType';
import SelectDate from './TaskItems/SelectDate';
import SelectTime from './TaskItems/SelectTime';
import { useState } from 'react';

function CreateTask() {
const [nameMeeting, setNameMeeting] = useState("new meeting")
const [meetingType, setMeetingType] = useState("")
const [selectedDate, setSelectedDate] = useState("")
const [selectedTimeStart, setSelectedTimeStart] = useState("")
const [selectedTimeEnd, setSelectedTimeEnd] = useState("")
console.log(nameMeeting, meetingType, selectedDate, selectedTimeStart, selectedTimeEnd)

  return (
    <div>
      <input value={nameMeeting} onChange={(e) => setNameMeeting(e.target.value)} placeholder="name task"></input>
      <MeetingType setMeetingType={setMeetingType} />
       <SelectDate setSelectedDate={setSelectedDate}/>
       start <SelectTime setSelectedTime={setSelectedTimeStart}/>
       end <SelectTime setSelectedTime={setSelectedTimeEnd}/>
       <div><GeoAlt/><input placeholder="Add location"></input></div>
       <div><TextLeft/><input placeholder="Add description"></input></div>

    </div>
  );
}
export default CreateTask;
