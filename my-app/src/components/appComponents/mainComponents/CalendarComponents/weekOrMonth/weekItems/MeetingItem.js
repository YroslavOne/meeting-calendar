import { useContext } from "react";
import TimeWhithColon from "../../../CreateTask/TaskItems/TimeWhithСolon";
import { Context } from "../../../../../Context";
import "./MeetingItem.css";

function MeetingItem(props) {
  const { actionsForMeeting } = useContext(Context);
  const itemForCalendarWeek = props.meetings.map((meeting) => {
    const hourMeetingStart =
      meeting.timeStart[0] <= 12
        ? meeting.timeStart[0] + "am"
        : meeting.timeStart[0] - 12 + "pm";

    if (meeting.Date[2] === props.day && props.hour === hourMeetingStart) {
      const timeStart = meeting.timeStart[0] + ":" + meeting.timeStart[1];
      const timeEnd = meeting.timeEnd[0] + ":" + meeting.timeEnd[1];
      const heigthMeeting =
        100 * (meeting.timeEnd[0] - meeting.timeStart[0]) +
        (100 / 60) * (meeting.timeEnd[1] - meeting.timeStart[1]) +
        "%";
      const heigthMeetingBorder =
        (100 * (meeting.timeEnd[0] - meeting.timeStart[0]) +
          (100 / 60) * (meeting.timeEnd[1] - meeting.timeStart[1])) /
          100 +
        "px";
      const topMeeting = (100 / 60) * meeting.timeStart[1] + "%";
      return (
        <div
          style={{
            background: !meeting.completed
              ? `rgba(${meeting.typeMeeting.color})`
              : "#8C8B90",
            height: `calc(${heigthMeeting} + ${heigthMeetingBorder})`,
            top: topMeeting,
            position: "absolute",
          }}
          onClick={() => actionsForMeeting(meeting.key)}
          className="hour-and-day-meeting"
        >
          <h4 className="hour-and-day-meeting-title">{meeting.name}</h4>
          <p className="hour-and-day-meeting-time">
            <TimeWhithColon value={timeStart} />
            &nbsp;-&nbsp;
            <TimeWhithColon value={timeEnd} />
          </p>
        </div>
      );
    } else {
      return (
        <div
          className="empty-slot"
          onClick={() => {
            actionsForMeeting("none");
          }}
        ></div>
      );
    }
  });
  return itemForCalendarWeek;
}
export default MeetingItem;
