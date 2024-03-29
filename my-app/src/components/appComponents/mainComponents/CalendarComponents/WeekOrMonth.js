import React, { useContext, useState } from "react";
import Month from "./weekOrMonth/Month.js";
import Week from "./weekOrMonth/Week.js";
import { SCREEN } from "../../../Constants.js";
import { Context } from "../../../Context.js";
import "./WeekOrMonth.css";

function WeekOrMonth(props) {
  const { setDateForScreenOutput, calendarBaseDate } = useContext(Context);
  const [WeekForOutput, setWeekForOutput] = useState("");
  const monthNow = calendarBaseDate.toLocaleString("en", { month: "long" });

  if (props.weekOrMonth === SCREEN.SCREEN_MONTH) {
    setDateForScreenOutput(monthNow);
  } else {
    setDateForScreenOutput(WeekForOutput);
  }

  return (
    <div className="week-or-month">
      {props.weekOrMonth === SCREEN.SCREEN_MONTH && <Month />}
      {props.weekOrMonth === SCREEN.SCREEN_WEEK && (
        <Week setWeekForOutput={setWeekForOutput} />
      )}
    </div>
  );
}
export default WeekOrMonth;
