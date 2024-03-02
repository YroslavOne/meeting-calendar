import React, { useContext, useState } from 'react';
import Month from './weekOrMonth/Month.js';
import MonthByDay from './weekOrMonth/MonthByDay.js';
import Week from './weekOrMonth/Week.js';
import { SCREEN } from '../../../Consist.js';
import { update } from 'lodash';
import { Context } from '../../../Context.js';

function WeekOrMonth() {
  let newDate = new Date();
  console.log(newDate);
  const { dateForDisplay, setDateForDisplay } = useContext(Context);
  const [weekOrMonth, setWeekOrMonth] = useState(SCREEN.SCREEN_MONTH);

  function flipThroughTheCalendar(leftOrRight) {
    let date = dateForDisplay;
    if (weekOrMonth === SCREEN.SCREEN_MONTH) {
      let updateDate =
        leftOrRight === 'left'
          ? new Date(date.getFullYear(), date.getMonth() - 1, date.getDate())
          : new Date(date.getFullYear(), date.getMonth() + 1, date.getDate());
      setDateForDisplay(updateDate);
    } else {
      let updateDate =
        leftOrRight === 'left'
          ? new Date(date.getFullYear(), date.getMonth(), date.getDate() - 7)
          : new Date(date.getFullYear(), date.getMonth(), date.getDate() + 7);
      setDateForDisplay(updateDate);
    }
  }

  return (
    <div>
      <div>
        <button
          value={'left'}
          onClick={(e) => {
            flipThroughTheCalendar(e.target.value);
          }}
        >
          left
        </button>
        <button
          value={'right'}
          onClick={(e) => {
            flipThroughTheCalendar(e.target.value);
          }}
        >
          right
        </button>
      </div>
      <label for="pet-select"></label>

      <select
        name="pets"
        onChange={(e) => setWeekOrMonth(e.target.value)}
        id="pet-select"
      >
        <option value={SCREEN.SCREEN_MONTH}>Month</option>
        <option value={SCREEN.SCREEN_WEEK}>Week</option>
      </select>
      {weekOrMonth === SCREEN.SCREEN_MONTH && <Month />}
      {weekOrMonth === SCREEN.SCREEN_WEEK && <Week />}
    </div>
  );
}
export default WeekOrMonth;
