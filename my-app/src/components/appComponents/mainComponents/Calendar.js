import { useState, useContext } from "react"
import WeekOrMonth from "./CalendarComponents/WeekOrMonth"
import "./Calendar.css"
import MeetingToday from "./MeetingToday/MeetingToday"
import { Context } from "../../Context";
import { SCREEN } from "../../Consist";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";

function Calendar(){
  const { dateForDisplay, setDateForDisplay, dateForScreenOutput } = useContext(Context);
  const [weekOrMonthInCalendar, setWeekOrMonthInCalendar] = useState(SCREEN.SCREEN_MONTH);


    function flipThroughTheCalendar(leftOrRight) {
        let date = dateForDisplay;
        if (weekOrMonthInCalendar === SCREEN.SCREEN_MONTH) {
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

return(
    <div className="calendar">

         
         <div className="calendar-button">
            <div className="calendar-button-date">

            <div className="calendar-button-left-rigth">
        <button
          value={'left'}
          onClick={(e) => {
            flipThroughTheCalendar(e.target.value);
          }}
        ><ChevronLeft/>
          
        </button>
        <button
          value={'right'}
          onClick={(e) => {
            flipThroughTheCalendar(e.target.value);
          }}
        ><ChevronRight/>
          
        </button>
        </div>
        <h2>{dateForScreenOutput}</h2>
        </div>
      
      <div className='week-or-month-select'>

      <select
        name="pets"
        onChange={(e) => setWeekOrMonthInCalendar(e.target.value)}
        id="pet-select"
        className='week-or-month-select'
      >
        <option value={SCREEN.SCREEN_MONTH}>Month</option>
        <option value={SCREEN.SCREEN_WEEK}>Week</option>
      </select>
      </div>
      </div>
    <WeekOrMonth weekOrMonth={weekOrMonthInCalendar}/>
   
    
    </div>
)
}
export default Calendar