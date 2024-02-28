import { useContext, useState } from 'react';
import { Context } from '../../../../Context';
import './MeetingType.css';
// import { ChatRight, Kanban, Motherboard, Telephone } from "react-bootstrap-icons";

function MeetingType(props) {
  const { meetingItems } = useContext(Context);
  // const [meetingType, setMeetingType] = useState(props.meetingType);
  function updateMeetingType(allValuesTypeMeeting) {
    let temporaryStorageForType = {
      background: allValuesTypeMeeting.background,
      color: allValuesTypeMeeting.color,
      name: allValuesTypeMeeting.name,
    };
    props.setMeetingType(temporaryStorageForType);
  }

  // props.setMeetingType(meetingType);

  // console.log(meetingType.name);
  return (
    <div className="meeting-type">
      <h5 className="meeting-type-title">Meeting type</h5>
      <ul className="meeting-type-items">
        {meetingItems.map((nameMeeting) => (
          <li
            className="meeting-type-item"
            onClick={(e) => updateMeetingType(nameMeeting)}
            style={
              props.meetingType.name === nameMeeting.name
                ? {
                    color: 'white',
                    background: 'rgba(' + nameMeeting.color + ')',
                  }
                : {
                    color: 'rgba(' + nameMeeting.color + ')',
                    background: 'rgba(' + nameMeeting.background + ')',
                  }
            }
          >
            {nameMeeting.icon}
            <p>{nameMeeting.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default MeetingType;
