import MonthByDay from "./MonthByDay";
import Week from "./Week";

function Month() {
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

  let dateForCalculations = new Date();
  let oneMonth = MonthByDay(dateForCalculations);
  console.log(oneMonth);

  function createMonth() {
    month = [[], [], [], [], [], [], []];
    oneMonth.map((oneMonth) => {
      month[oneMonth.week][oneMonth.dayWeek] = { day: oneMonth.day, month: oneMonth.month };
    });
    return month;
  }
  console.log(createMonth());

  let sortThroughDay = createMonth().map((week)=>
  <tr>
    {week.map((day)=>
    <td>
    <div>{day.day}</div>
  </td>
    )}
  </tr>
  )

  let generationDayWeek = dayForWeek.map((objWeekByDay) => {
    return (
      <th className="day-for-week">
        <div>{objWeekByDay.dayWeek}</div>
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
