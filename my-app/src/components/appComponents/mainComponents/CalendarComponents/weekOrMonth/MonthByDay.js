function MonthByDay() {
  const date = new Date(2024, 0, 1);
  console.log(date);
  let everyDayList = [];

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayForMonthLeapYear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const dayForMonthNotLeapYear = [
    31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,
  ];
  const LeapYear = new Date(date.getFullYear(), 2, 0);

  console.log(`year: ${date.getFullYear()}`);
  console.log(`month: ${month[date.getMonth()]}`);
  console.log(`day week ${dayWeek[date.getDay()]}`);
  console.log(`количество дней: ${chekedLeapYear(date)}`);

  function chekedLeapYear(data) {
    let year = data.getFullYear();
    let LeapYear = new Date(year, 2, 0);
    let monthValue = data.getMonth();
    let day = LeapYear.getDate();
    if (day === 29) {
      return dayForMonthLeapYear[monthValue];
    } else {
      return dayForMonthNotLeapYear[monthValue];
    }
  }

  function chekedNextYear(data) {
    let year = data.getFullYear();
    let nextYear = new Date(year, 2, 0);
    let monthValue = data.getMonth();
    let day = LeapYear.getDate();
    if (day === 29) {
      return dayForMonthLeapYear[monthValue];
    } else {
      return dayForMonthNotLeapYear[monthValue];
    }
  }

  daysByWeeks();
  function daysByWeeks() {
    let everyDayWeekList = [];
    let firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    let previousMonth = chekedPrevisionMonth(firstDay);

    function chekedPrevisionMonth(data) {
      let monthPreviously = firstDay.getMonth() - 1;
      let newYearAndMonth = data;
      if (monthPreviously < 0) {
        let updateYear = date.getFullYear() - 1;
        newYearAndMonth = new Date(updateYear, 11, 30);
      } else {
        let dateForCheked = new Date(date.getFullYear(), monthPreviously, 15);
        let amountDay = chekedLeapYear(dateForCheked);
        newYearAndMonth = new Date(
          date.getFullYear(),
          monthPreviously,
          amountDay
        );
      }
      return newYearAndMonth;
    }

    let dayWeek = firstDay.getDay();
    if (dayWeek !== 0) {
      for (let i = 0; i < dayWeek; i++) {
        addDataInList(
          previousMonth.getFullYear(),
          previousMonth.getMonth(),
          previousMonth.getDate() - dayWeek + i + 1,
          i,
          1
        );
      }
    }

    if (dayWeek >= 0) {
      let countDay = 1;
      let maxDay = chekedLeapYear(date);

      addDataInList(
        firstDay.getFullYear(),
        firstDay.getMonth(),
        countDay,
        dayWeek,
        1
      );
      countDay = 2;

      for (let i = dayWeek + 1; i < 7; i++) {
        if (countDay <= maxDay) {
          countDay++;
          everyDayWeekList.push({
            yaer: firstDay.getFullYear(),
            month: firstDay.getMonth(),
            day: countDay,
            dayWeek: i,
            week: 1,
          });
        }
      }

      let endDayWeek = 0;

      for (let j = 2; countDay <= maxDay; j++) {
        for (let i = 0; i < 7; i++) {
          countDay++;
          if (countDay < maxDay) {
            everyDayWeekList.push({
              yaer: firstDay.getFullYear(),
              month: firstDay.getMonth(),
              day: countDay,
              dayWeek: i,
              week: j,
            });
            endDayWeek = i;
            console.log("hi");
          }
        }
      }

      for (let i = endDayWeek + 1; i < 7; i++) {
        if (countDay <= maxDay) {
          countDay++;
          everyDayWeekList.push({
            yaer: firstDay.getFullYear(),
            month: firstDay.getMonth(),
            day: countDay,
            dayWeek: i,
            week: 1,
          });
        }
      }

      console.log(everyDayWeekList);
    }

    function addDataInList(
      yaerValue,
      monthValue,
      dayValue,
      dayWeekValue,
      weekValue
    ) {
      everyDayWeekList.push({
        yaer: yaerValue,
        month: monthValue,
        day: dayValue,
        dayWeek: dayWeekValue,
        week: weekValue,
      });
    }
  }
}

export default MonthByDay;
