import { useContext } from 'react';
import { Context } from '../../../../Context';
import MonthByDay from './MonthByDay';
import './Week.css';
import TimeWhithColon from '../../CreateTask/TaskItems/TimeWhithСolon';
import MeetingItem from './weekItems/MeetingItem';

function Week(props) {
  const { meetings, actionsForMeeting, dateForDisplay, setCreateWindow } =
    useContext(Context);
  let dateForCalculations = dateForDisplay;
  let tasks = [
    {
      title: 'title',
      meetingType: 'Project Meeting',
      dayWeek: 'friday',
      date: new Date(2024, 2, 13),
      startTime: 10,
      endTime: 12,
      location: 'add location',
      description: 'Add Description',
    },
    {
      title: 'title',
      meetingType: 'Project Meeting',
      dayWeek: 'friday',
      date: new Date(2024, 2, 13, 10, 45),
      startDate: new Date(2024, 2, 13, 10, 45),
      endDate: new Date(2024, 2, 13, 11, 45),
      location: 'add location',
      description: 'Add Description',
    },
    {
      title: 'title',
      meetingType: 'Project Meeting',
      dayWeek: 'friday',
      date: new Date(2024, 2, 13),
      startTime: 10,
      endTime: 12,
      location: 'add location',
      description: 'Add Description',
    },
  ];

  let oneMonth = MonthByDay(dateForCalculations);
  // console.log(dateForCalculations)

  let numberWeek = oneMonth.filter(
    (filterOneMonth) =>
      filterOneMonth.month === dateForCalculations.getMonth() &&
      filterOneMonth.day === dateForCalculations.getDate()
  );
  let weekByDay = oneMonth.filter(
    (filterOneMonth) => filterOneMonth.week === numberWeek[0].week
  );

  const monthNow = dateForCalculations.toLocaleString('en', { month: 'long' });
  const dayStartWeek = weekByDay[0].day;
  const dayEndWeek = weekByDay[6].day;
  props.setWeekForOutput(`${dayStartWeek} - ${dayEndWeek} ${monthNow}`);

  weekByDay.unshift({
    year: 2023,
    month: 0,
    day: undefined,
    dayWeek: 1,
    week: 1,
    today: 1,
  });

  const dayForWeek = [
    { dayWeek: '' },
    { dayWeek: 'sun' },
    { dayWeek: 'mon' },
    { dayWeek: 'tue' },
    { dayWeek: 'wed' },
    { dayWeek: 'thu' },
    { dayWeek: 'fri' },
    { dayWeek: 'sat' },
  ];
  let hoursPerDay = ["0pm", "1am", "2am", "3am", "4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm",];
  // for (let i = 0; i < 2; i++) {
  //   let dayOrEvening = i === 0 ? 'am' : 'pm';
  //   for (let i = 1; i <= 12; i++) {
  //     hoursPerDay.push(i + dayOrEvening);
  //   }
  // }

  let generationDayForWeek = weekByDay.map((objWeekByDay, index) => {
    return (
      <th className="day-for-week">
        <div
          className={
            objWeekByDay.today
              ? 'day-for-weekday true-today'
              : 'day-for-weekday'
          }
        >
          {dayForWeek[index].dayWeek}
        </div>
        <div
          className={
            objWeekByDay.today
              ? 'day-for-weekdate true-today'
              : 'day-for-weekdate'
          }
        >
          {objWeekByDay.day}
        </div>
      </th>
    );
  });
  let generationHourForWeek = hoursPerDay.map((hour) => (
    <tr>
      <td className="hour-week">
        <div className="hour-week-div">{hour==="0pm"?"":hour}</div>
      </td>
      {weekByDay.map((day) =>
        day.day ? (
          <td className="hour-weer-cell">
            {checkingMeetingNow(hour, day.day)}
          </td>
        ) : (
          ''
        )
      )}
    </tr>
  ));

  function checkingMeetingNow(hour, day) {
    return (
      <div className="hour-and-day">
        <MeetingItem setCreateWindow={setCreateWindow} hour = {hour} day={day} meetings={meetings}/>
        
        {/* {meetings.map((meeting) => {
          const result = '';
          const hourMeetingStart =
            meeting.timeStart[0] < 12
              ? meeting.timeStart[0] + 'am'
              : meeting.timeStart[0] - 12 + 'pm';

          if (meeting.Date[2] === day && hour === hourMeetingStart) {
            const timeStart = meeting.timeStart[0] + ':' + meeting.timeStart[1];
            const timeEnd = meeting.timeEnd[0] + ':' + meeting.timeEnd[1];

            return (
              <div
                style={{ background: `rgba(${meeting.typeMeeting.color})` }}
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
                  setCreateWindow(true);
                }}
              ></div>
            );
          }
        })} */}
      </div>
    );
  }

  return (
    <div className="container">
      <table
        width="100%"
        ALIGN="center"
        cellpadding="30vh"
        cellspacing="0"
        overflow="auto"
        position="fixed"
      >
        <thead position="sticky" top="0px" className="table-thead">
          <tr className="">{generationDayForWeek}</tr>
        </thead>
        <tbody className="week-table-body">{generationHourForWeek}</tbody>
      </table>
    </div>
  );
}
export default Week;
