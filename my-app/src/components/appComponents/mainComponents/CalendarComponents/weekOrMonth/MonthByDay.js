function MonthByDay(dateForCalculations) {
  const date = dateForCalculations;
  const today = new Date();
  console.log(date)
  let everyDayWeekList = [];

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

  function chekedToday(yaerValue, monthValue, dayValue){
    if(yaerValue===today.getFullYear() && monthValue===today.getMonth() && dayValue ===today.getDate()){
        return true

    } else {
        return false
    }
  }

  daysByWeeks();
  function daysByWeeks() {
    
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

    function chekedNextMonth(date) {
      let monthPreviously = firstDay.getMonth() + 1;
      let newYearAndMonth = date;
      if (monthPreviously > 11) {
        let updateYear = date.getFullYear() + 1;
        newYearAndMonth = new Date(updateYear, 0, 1);
      } else {
        newYearAndMonth = new Date(date.getFullYear(), monthPreviously, 1);
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
          1,
          false
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
        1,
        chekedToday(firstDay.getFullYear(), firstDay.getMonth(), countDay)
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
            today: chekedToday(firstDay.getFullYear(), firstDay.getMonth(), countDay),
          });
        }
      }

      let endDayWeek = 0;
      let endNumberWeek;

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
              today: chekedToday(firstDay.getFullYear(), firstDay.getMonth(), countDay),
            });
            endDayWeek = i;
            endNumberWeek = j;
          }
        }
      }

      let endDate = chekedNextMonth(date);
      let endDay = 1;

      for (let i = endDayWeek + 1; i < 7; i++) {
        everyDayWeekList.push({
          yaer: endDate.getFullYear(),
          month: endDate.getMonth(),
          day: endDay,
          dayWeek: i,
          week: endNumberWeek,
          today: false
        });
        endDay++;
      }
    }

    function addDataInList(
      yaerValue,
      monthValue,
      dayValue,
      dayWeekValue,
      weekValue,
      today
    ) {
      everyDayWeekList.push({
        yaer: yaerValue,
        month: monthValue,
        day: dayValue,
        dayWeek: dayWeekValue,
        week: weekValue,
        today: today,
      });
    }
  }
   return(everyDayWeekList)
}

export default MonthByDay;
