import { useContext, useState } from 'react';
import { Context } from '../../../../Context';
// import { ChatRight, Kanban, Motherboard, Telephone } from "react-bootstrap-icons";

function MeetingType(props) {
  const { meetingItems } = useContext(Context);
  const [meetingType, setMeetingType]= useState("")
props.setMeetingType(meetingType)
  return (
    <div>
      <h5>Meeting type</h5>
      <div>
        {meetingItems.map((nameMeeting) => (
          <div onClick={(e)=>setMeetingType(nameMeeting)} className={nameMeeting.className}>
            {nameMeeting.icon}
            {nameMeeting.name}
          </div>
        ))}
      </div>
    </div>
  );
}
export default MeetingType;
