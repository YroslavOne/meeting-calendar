import { useContext } from 'react';
import { Context } from '../../../../Context';
import MonthByDay from './MonthByDay';
import './Week.css';
import MeetingItem from './weekItems/MeetingItem';

function Week(props) {
  const { meetingsAfterSearch, calendarBaseDate } = useContext(Context);
  let dateForCalculations = calendarBaseDate;

  let oneMonth = MonthByDay(dateForCalculations);

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
    completed: false,
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
  let hoursPerDay = [
    '0pm',
    '1am',
    '2am',
    '3am',
    '4am',
    '5am',
    '6am',
    '7am',
    '8am',
    '9am',
    '10am',
    '11am',
    '12am',
    '1pm',
    '2pm',
    '3pm',
    '4pm',
    '5pm',
    '6pm',
    '7pm',
    '8pm',
    '9pm',
    '10pm',
    '11pm',
  ];

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
        <div className="hour-week-div">{hour === '0pm' ? '' : hour}</div>
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
        <MeetingItem
          hour={hour}
          day={day}
          meetings={meetingsAfterSearch}
        />
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
