import { useContext } from 'react';
import { Context } from '../../../../Context';
import MonthByDay from './MonthByDay';
import './Week.css';

function Week() {
  const { meetings } = useContext(Context);
  let dateForCalculations = new Date();
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
  console.log(oneMonth);

  let numberWeek = oneMonth.filter(
    (filterOneMonth) =>
      filterOneMonth.month === dateForCalculations.getMonth() &&
      filterOneMonth.day === dateForCalculations.getDate()
  );
  console.log(numberWeek);
  let weekByDay = oneMonth.filter(
    (filterOneMonth) => filterOneMonth.week === numberWeek[0].week
  );

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
    { dayWeek: 'mon' },
    { dayWeek: 'tue' },
    { dayWeek: 'wed' },
    { dayWeek: 'thu' },
    { dayWeek: 'fri' },
    { dayWeek: 'sat' },
    { dayWeek: 'sun' },
  ];
  let hoursPerDay = [];
  for (let i = 0; i < 2; i++) {
    let dayOrEvening = i === 0 ? 'am' : 'pm';
    for (let i = 1; i <= 12; i++) {
      hoursPerDay.push(i + dayOrEvening);
    }
  }

  let generationDayForWeek = weekByDay.map((objWeekByDay, index) => {
    return (
      <th className="day-for-week">
        <div>{dayForWeek[index].dayWeek}</div>
        <div>{objWeekByDay.day}</div>
      </th>
    );
  });
  let generationHourForWeek = hoursPerDay.map((hour) => (
    <tr>
      <td className="hour-week">
        <div className="hour-week-div">{hour}</div>
      </td>
      {weekByDay.map((day) =>
        day.day ? (
          <td className="hour-weer-cell">
            <div>{checkingMeetingNow(hour, day.day)}</div>
          </td>
        ) : (
          ''
        )
      )}
    </tr>
  ));

  function checkingMeetingNow(hour, day) {
    let result;
    meetings.map((meeting) => {
      const hourMeetingStart =
        meeting.timeStart[0] < 12
          ? meeting.timeStart[0] + 'am'
          : meeting.timeStart[0] - 12 + 'pm';
      console.log(hourMeetingStart);

      if (meeting.Date[2] === day && hour === hourMeetingStart) {
        result = 'hi';
        console.log('yes');
      } else {
        result = '';
        console.log('no');
      }
    });
    return result;
  }

  return (
    <table width="100%" ALIGN="center" cellpadding="15px" cellspacing="0">
      <thead>
        <tr className="">{generationDayForWeek}</tr>
      </thead>

      <tbody>
        <tr></tr>
      </tbody>
      {generationHourForWeek}
    </table>
  );
}
export default Week;
