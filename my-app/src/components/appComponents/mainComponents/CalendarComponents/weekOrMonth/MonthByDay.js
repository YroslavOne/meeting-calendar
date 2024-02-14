function MonthByDay(){
const daysInWeek = 7;
const result = [];
const date = new Date(year, month);
const daysInMonth = getDaysInMonth(date);
const monthStartsOn = getDatOfWeek(date.getDate);
let day = 1;

for (let i=0; i< (daysInMonth+monthStartsOn)/daysInWeek; i++){
    result[i]=[];
    for(let j=0; j<daysInWeek; j++){
        result[i][j]= new Date(year, month, day)
    }
}


}
export default MonthByDay