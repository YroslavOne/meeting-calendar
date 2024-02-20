import React, { useState } from "react";
import Month from "./weekOrMonth/Month.js"
import MonthByDay from "./weekOrMonth/MonthByDay.js"
import Week from "./weekOrMonth/Week.js";




function WeekOrMonth(){

    const newDate = new Date()
// const [dateValue, setDateValue] = useState(newDate)
const [dateValue, setDateValue] = useState(newDate);
console.log(dateValue)
return(
    <div>
        <Month/>
        <Week/>
       
        hi i week or month
    </div>
)
}
export default WeekOrMonth