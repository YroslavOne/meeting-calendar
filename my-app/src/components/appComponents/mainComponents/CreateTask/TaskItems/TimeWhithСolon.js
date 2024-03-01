function TimeWhithColon(props){
    const value = props.value
    console.log(value)
    const hour =  value[1] === ":" ? '0' + value[0] : value[0] + value[1];
    const twelveHour = hour > 12 ? hour - 12 : hour;
    const minut = value[4] === undefined ? '0' + value[3] : value[3] + value[4];
    const prepand = hour > 12 ? ' PM ' : ' AM ';

    return(
        <div className="style-no-edit-timer">
        {twelveHour}
        <span >&nbsp;:&nbsp;</span>
        {minut} {prepand}
      </div>
    )
}
export default TimeWhithColon