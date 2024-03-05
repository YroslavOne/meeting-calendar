import MonthByDay from "./MonthByDay";
// import Week from "./Week";
import "./Month.css";
import { useContext } from "react";
import { Context } from "../../../../Context";
import { v4 as uuidv4 } from "uuid";

function Month(props) {
  const { meetings, actionsForMeeting, dateForDisplay } = useContext(Context);
  const dayForWeek = [
    { dayWeek: "sun" },
    { dayWeek: "mon" },
    { dayWeek: "tue" },
    { dayWeek: "wed" },
    { dayWeek: "thu" },
    { dayWeek: "fri" },
    { dayWeek: "sat" },
  ];

  let month = [];

  let dateForCalculations = dateForDisplay;
  let nowMonth = dateForCalculations.getMonth();

  let oneMonth = MonthByDay(dateForCalculations);

  function createMonth() {
    month = [[], [], [], [], [], [], []];
    oneMonth.map((oneMonth) => {
      month[oneMonth.week][oneMonth.dayWeek] = {
        day: oneMonth.day,
        thisMonth: oneMonth.month === nowMonth,
        month: oneMonth.month,
      };
    });
    return month;
  }

  function checkingAppointmentsForDay(day, month) {
    return (
      <div className="meeting-in-day-margin">
        {meetings.map((meeting, index) => {
          if (meeting.Date[2] === day && month === meeting.Date[1]) {
            return (
              <div
                key={index}
                style={{ background: `rgba(${meeting.typeMeeting.color})` }}
                onClick={() => {
                  actionsForMeeting(meeting.key);
                }}
                className="meeting-in-day"
              >
                {meeting.name}
              </div>
            );
          }
        })}
      </div>
    );
  }

  let sortThroughDay = createMonth().map((week) => (
    <tr>
      {week.map((day) => (
        <td className="this-day-for-month" key={uuidv4()}>
          <div className={day.thisMonth ? "this-day-for-month-div" : "this-day-for-month-div color"}>
            <p >{day.day}</p>
            <div>{checkingAppointmentsForDay(day.day, day.month)} </div>
          </div>
        </td>
      ))}
    </tr>
  ));

  let generationDayWeek = dayForWeek.map((objWeekByDay, index) => {
    return (
      <th key={index} className="day-for-week">
        <div style={{ color: "#8C8B90" }}>{objWeekByDay.dayWeek}</div>
      </th>
    );
  });
  return (
    <table width="100%" ALIGN="center" cellpadding="15px" cellspacing="0">
      <thead>
        <tr className="">{generationDayWeek}</tr>
      </thead>

      <tbody>{sortThroughDay}</tbody>
    </table>
  );
}
export default Month;
