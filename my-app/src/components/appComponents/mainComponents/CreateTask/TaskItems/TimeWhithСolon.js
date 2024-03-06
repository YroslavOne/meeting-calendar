function TimeWhithColon(props) {
  const value = props.value;

  let minut;
  let prepand;
  let hour;

  if (props.value.length === 3) {
    console.log("hi");
    hour = "0" + value[0];
    minut = "0" + value[2];
    prepand = hour > 12 ? " PM " : " AM ";
  } else if (props.value.length === 4) {
    hour = value[1] === ":" ? "0" + value[0] : value[0] + value[1];
    minut = value[2] === ":" ? "0" + value[3] : value[2] + value[3];
    prepand = hour > 12 ? " PM " : " AM ";
  } else {
    hour = value[0] + value[1];
    minut = value[3] + value[4];
    prepand = hour > 12 ? " PM " : " AM ";
  }

  let twelveHour = hour > 12 ? hour - 12 : hour;

  return (
    <div className="style-no-edit-timer">
      {twelveHour}
      <span>:</span>
      {minut} {prepand}
    </div>
  );
}
export default TimeWhithColon;
