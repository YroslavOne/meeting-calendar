import "./EnterName.css";

function EnterName(props) {
  if (props.interactionWithTask) {
    return (
      <div
        className="create-meeting-name create-meeting-name-div"
        placeholder="name task"
      >
        {props.nameMeeting}
      </div>
    );
  } else {
    return (
      <input
        className="create-meeting-name"
        value={props.nameMeeting}
        onChange={(e) => props.setNameMeeting(e.target.value)}
        placeholder="name task"
      ></input>
    );
  }
}
export default EnterName;
