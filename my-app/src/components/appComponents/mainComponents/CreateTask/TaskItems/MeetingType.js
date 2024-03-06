import { useContext } from "react";
import { Context } from "../../../../Context";
import "./MeetingType.css";

function MeetingType(props) {
  const { meetingItems } = useContext(Context);

  function updateMeetingType(allValuesTypeMeeting) {
    let temporaryStorageForType = {
      background: allValuesTypeMeeting.background,
      color: allValuesTypeMeeting.color,
      name: allValuesTypeMeeting.name,
    };
    !props.interactionWithTask && props.setMeetingType(temporaryStorageForType);
  }

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
                    color: "white",
                    background: "rgba(" + nameMeeting.color + ")",
                  }
                : {
                    color: "rgba(" + nameMeeting.color + ")",
                    background: "rgba(" + nameMeeting.background + ")",
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
