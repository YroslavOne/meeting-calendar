import MonthByDay from "./MonthByDay";

function Week() {
  let dateForCalculations = new Date();
  let tasks = [
    {
      title: "title",
      meetingType: "Project Meeting",
      dayWeek: "friday",
      date: new Date(2024, 2, 13),
      startTime: 10,
      endTime: 12,
      location: "add location",
      description: "Add Description",
    },
    {
      title: "title",
      meetingType: "Project Meeting",
      dayWeek: "friday",
      date: new Date(2024, 2, 13, 10, 45),
      startDate: new Date(2024, 2, 13, 10, 45),
      endDate: new Date(2024, 2, 13, 11, 45),
      location: "add location",
      description: "Add Description",
    },
    {
      title: "title",
      meetingType: "Project Meeting",
      dayWeek: "friday",
      date: new Date(2024, 2, 13),
      startTime: 10,
      endTime: 12,
      location: "add location",
      description: "Add Description",
    },
  ];

  console.log(tasks);
  console.log(dateForCalculations.getDay());

  let oneMonth = MonthByDay(dateForCalculations);
  let numberWeek = oneMonth.filter(
    (filterOneMonth) =>
      filterOneMonth.month === dateForCalculations.getMonth() &&
      filterOneMonth.day === dateForCalculations.getDate()
  );
  console.log(numberWeek[0].week);
  // let oneWeekByDay =  oneMonth.filter((filterOneMonth)=> )
  let weekByDay = oneMonth.filter(
    (filterOneMonth) => filterOneMonth.week === numberWeek[0].week
  );
  console.log(weekByDay);
  weekByDay.unshift({
    yaer: 2023,
    month: 0,
    day: undefined,
    dayWeek: 1,
    week: 1,
    today: 1,
  });

  const dayForWeek = [
    { dayWeek: "" },
    { dayWeek: "sun" },
    { dayWeek: "mon" },
    { dayWeek: "tue" },
    { dayWeek: "wed" },
    { dayWeek: "thu" },
    { dayWeek: "fri" },
    { dayWeek: "sat" },
  ];
  let hoursPerDay = [];
  for (let i = 0; i < 2; i++) {
    let dayOrEvening = i === 0 ? "am" : "pm";
    for (let i = 1; i <= 12; i++) {
      hoursPerDay.push(i + dayOrEvening);
    }
  }

  let generationDayForWeek = weekByDay.map((objWeekByDay, index) => {
    return (
      <td>
        {dayForWeek[index].dayWeek}
        <th>{objWeekByDay.day}</th>
       { objWeekByDay.day === undefined? 
(hoursPerDay.map((hour) => (
    <tr>
      <td>{hour}</td>
    </tr>
  ))):  
           ( hoursPerDay.map((hour) => (
                <tr>
                  <td>none</td>
                </tr>
              )))
        }
    
      </td>
    );
  });

  return (
    <table>
      {/* <td>
        none
        <tr>same none</tr>
        {hoursPerDay.map((hour) => (
          <tr>{hour}</tr>
        ))}
      </td> */}

      {generationDayForWeek}
    </table>
  );
}
export default Week;
