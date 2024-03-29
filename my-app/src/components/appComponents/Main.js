import { useContext } from "react";
import { Context } from "../Context";
import Calendar from "./mainComponents/Calendar";
import CreateMeeting from "./mainComponents/CreateTask/CreateMeeting";
import MeetingToday from "./mainComponents/MeetingToday/MeetingToday";
import "./Main.css";
import { Plus } from "react-bootstrap-icons";

function Main() {
  const { meetingCreator, actionsForMeeting } = useContext(Context);
  return (
    <div>
      <div className="main-calendar-and-meetingtoday">
        <Calendar />
        <MeetingToday />
        {meetingCreator && <CreateMeeting />}
      </div>
      <div>
        <button
          onClick={() => {
            actionsForMeeting("none");
          }}
        >
          <Plus className="add-meeting" />
        </button>
      </div>
    </div>
  );
}
export default Main;
