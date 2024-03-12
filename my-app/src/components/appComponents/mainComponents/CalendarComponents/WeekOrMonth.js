import React, { useContext, useState } from 'react';
import Month from './weekOrMonth/Month.js';
import Week from './weekOrMonth/Week.js';
import { SCREEN } from '../../../Consist.js';
import { Context } from '../../../Context.js';
import './WeekOrMonth.css';

function WeekOrMonth(props) {
  const { setDateForScreenOutput, dateForDisplay } = useContext(Context);
  // console.log()
  const [WeekForOutput, setWeekForOutput] = useState(''); // дни недели + месяц
  const monthNow = dateForDisplay.toLocaleString('en', { month: 'long' });

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
