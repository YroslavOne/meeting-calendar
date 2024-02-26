import MonthByDay from './MonthByDay';
import Week from './Week';

function Month() {
  const dayForWeek = [
    { dayWeek: 'mon' },
    { dayWeek: 'tue' },
    { dayWeek: 'wed' },
    { dayWeek: 'thu' },
    { dayWeek: 'fri' },
    { dayWeek: 'sat' },
    { dayWeek: 'sun' },
  ];

  let dateForCalculations = new Date();
  let oneMonth = MonthByDay(dateForCalculations);
  console.log(oneMonth[oneMonth.length - 1].week);

  let convertToDaysWeek = dayForWeek.map((dayForWeek, index) => {
    let dayOneWeek = oneMonth.filter((oneDay) => oneDay.week === 1);
    console.log(index);
    // <tr>
    {
      /* {dayOneWeek.map((oneDayForWeek) => (
        <td className="hour-weer-cell">
          <div>{oneDayForWeek.day}</div>
        </td>
      ))} */
    }
    {
      /* </tr> */
    }
  });
  // let convertToDaysWeek = oneMonth.map((oneDay) => (
  //   <tr>
  //     <td className="hour-week">
  //       <div className="hour-week-div">{hour}</div>
  //     </td>
  //     {weekByDay.map((day) =>
  //       day.day ? (
  //         <td className="hour-weer-cell">
  //           <div></div>
  //         </td>
  //       ) : (
  //         ''
  //       )
  //     )}
  //   </tr>
  // ));
  let generationDayForWeek = dayForWeek.map((objWeekByDay) => {
    return (
      <th className="day-for-week">
        <div>{objWeekByDay.dayWeek}</div>
      </th>
    );
  });
  return (
    <table width="100%" ALIGN="center" cellpadding="15px" cellspacing="0">
      <thead>
        <tr className="">{generationDayForWeek}</tr>
      </thead>

      <tbody>
        <tr></tr>
      </tbody>
    </table>
  );
}
export default Month;
