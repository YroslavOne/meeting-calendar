import { useContext } from 'react';
import { Context } from '../../../Context';
import TimeWhithColon from '../CreateTask/TaskItems/TimeWhithСolon';

function MeetingToday() {
  const dateToday = new Date();
  const monthNow = dateToday.toLocaleString('en', { month: 'long' });
  const dayNow = dateToday.getDate();
  const { meetings, meetingItems } = useContext(Context);

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
        style={{
          color: 'rgba(' + filterTypeMeeting[0].color + ')',
          background: 'rgba(' + filterTypeMeeting[0].background + ')',
        }}
      >
        {filterTypeMeeting[0].icon}
      </div>
    );
  }
  return (
    <div>
      <h3>Meetings</h3>
      {/* <button>view all</button>s */}
      <p>
        today, {monthNow} {dayNow}
      </p>
      {meetingsToday.map((meetingToday) => (
        <div>
          {meetingToday.name}
          <div>
            <TimeWhithColon
              value={
                meetingToday.timeStart[0] + ':' + meetingToday.timeStart[1]
              }
            />
            &nbsp;-&nbsp;
            <TimeWhithColon
              value={meetingToday.timeEnd[0] + ':' + meetingToday.timeEnd[1]}
            />
            <div>{meetingTypeIcon(meetingToday.typeMeeting.name)}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default MeetingToday;
