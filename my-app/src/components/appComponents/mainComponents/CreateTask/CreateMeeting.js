import { Clock, GeoAlt, TextLeft } from "react-bootstrap-icons";
import MeetingType from "./TaskItems/MeetingType";
import SelectDate from "./TaskItems/SelectDate";
import SelectTime from "./TaskItems/SelectTime";
import { useState } from "react";
import "./CreateMeeting.css";

function CreateMeeting() {
  const [nameMeeting, setNameMeeting] = useState("new meeting");
  const [meetingType, setMeetingType] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTimeStart, setSelectedTimeStart] = useState("");
  const [selectedTimeEnd, setSelectedTimeEnd] = useState("");
  console.log(
    nameMeeting,
    meetingType,
    selectedDate,
    selectedTimeStart,
    selectedTimeEnd
  );

  return (
    <div className="create-meeting">
      <input
        className="create-meeting-name"
        value={nameMeeting}
        onChange={(e) => setNameMeeting(e.target.value)}
        placeholder="name task"
      ></input>
      <MeetingType setMeetingType={setMeetingType} />
      <div className="line"></div>
      <div className="create-meeting-data-and-time">
        <Clock className="icon-create-meeting" />
        <div>
          <div className="create-meeting-time">
            <SelectTime setSelectedTime={setSelectedTimeStart} />
            - <SelectTime setSelectedTime={setSelectedTimeEnd} />
          </div>
          <SelectDate setSelectedDate={setSelectedDate} />
        </div>
      </div>

      <div className="create-meeting-location">
        <GeoAlt className="icon-create-meeting" />
        <input placeholder="Add location"></input>
      </div>
      <div className="create-meeting-description">
        <TextLeft className="icon-create-meeting" />
        <input placeholder="Add description"></input>
      </div>
      <div className="create-meeting-button">
        <button >Create meeting</button>
      
      <button >Delete meeting</button>
      </div>
    </div>
  );
}
export default CreateMeeting;
