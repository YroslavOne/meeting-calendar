import { useContext, useState } from 'react';
import { Context } from '../../../../Context';
import "./MeetingType.css"
// import { ChatRight, Kanban, Motherboard, Telephone } from "react-bootstrap-icons";

function MeetingType(props) {
  const { meetingItems } = useContext(Context);
  const [meetingType, setMeetingType]= useState("")
props.setMeetingType(meetingType)
  return (
    <div className='meeting-type'>
      <h5 className='meeting-type-title'>Meeting type</h5>
      <ul className='meeting-type-items'>
        {meetingItems.map((nameMeeting) => (
          <li className='meeting-type-item' onClick={(e)=>setMeetingType(nameMeeting)} style={{color: "rgba("+nameMeeting.color+")", background: "rgba("+nameMeeting.background+")"}}>
            {nameMeeting.icon}
            <p>{nameMeeting.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default MeetingType;
