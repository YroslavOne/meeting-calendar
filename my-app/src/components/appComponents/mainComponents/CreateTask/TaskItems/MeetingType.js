import { useContext } from 'react';
import { Context } from '../../../../Context';
// import { ChatRight, Kanban, Motherboard, Telephone } from "react-bootstrap-icons";

function MeetingType() {
  const { meetingItems } = useContext(Context);

  return (
    <div>
      <h5>Meeting type</h5>
      <div>
        {meetingItems.map((nameMeeting) => (
          <div className={nameMeeting.className}>
            {nameMeeting.icon}
            {nameMeeting.name}
          </div>
        ))}
      </div>
    </div>
  );
}
export default MeetingType;
