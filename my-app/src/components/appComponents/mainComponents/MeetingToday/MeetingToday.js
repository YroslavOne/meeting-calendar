import { useContext } from "react";
import { Context } from "../../../Context";
import TimeWhithColon from "../CreateTask/TaskItems/TimeWhithСolon";
import "./MeetingToday.css";

function MeetingToday() {
  const dateToday = new Date();
  const monthNow = dateToday.toLocaleString("en", { month: "long" });
  const dayNow = dateToday.getDate();
  const { meetings, meetingItems, actionsForMeeting } = useContext(Context);

  let meetingsToday = meetings.filter(
    (meeting) =>
      meeting.Date[0] === dateToday.getFullYear() &&
      meeting.Date[1] === dateToday.getMonth() &&
      meeting.Date[2] === dateToday.getDate()
  );


  function meetingTypeIcon(nameMeeting) {
    const filterTypeMeeting = meetingItems.filter(
      
      (meetingItem) => meetingItem.name === nameMeeting
    );
    return (
      <div
      className="meeting-today-card-icon"
        style={{
          '--line-color': "rgba(" + filterTypeMeeting[0].color + ")",
          color: "rgba(" + filterTypeMeeting[0].color + ")",
          background: "rgba(" + filterTypeMeeting[0].background + ")",
        }}
      >
        {filterTypeMeeting[0].icon}
      </div>
    );
  }

  function lineColor(nameMeeting) {
    const filterTypeMeeting = meetingItems.filter(
      
      (meetingItem) => meetingItem.name === nameMeeting
    );
    return ("rgba(" + filterTypeMeeting[0].color + ")")
   
  }
  return (
    <div className="meeting-today">
      <h3 className="meeting-today-title">Meetings</h3>
      <p className="meeting-today-date">
        today, {monthNow} {dayNow}
      </p>
      <div className="list-meeting-today">
      {meetingsToday.map((meetingToday) => (
        <div className="meeting-today-card" onClick={()=>{actionsForMeeting(meetingToday.key)}}  style={{
          '--line-color': lineColor(meetingToday.typeMeeting.name)}}>
          <div className="meeting-today-card-titletime-and-meetingtype">
          <div className="meeting-today-card-title-and-time">
          <h4 className="meeting-today-card-title">{meetingToday.name}</h4>
          
            <div className="meeting-today-card-time">
              <TimeWhithColon
                value={
                  meetingToday.timeStart[0] + ":" + meetingToday.timeStart[1]
                }
              />
              &nbsp;-&nbsp;
              <TimeWhithColon
                value={meetingToday.timeEnd[0] + ":" + meetingToday.timeEnd[1]}
              />
              </div>
            </div>
              {meetingTypeIcon(meetingToday.typeMeeting.name)}
          </div>
          </div>
      ))}
      </div>
    </div>
  );
}
export default MeetingToday;
