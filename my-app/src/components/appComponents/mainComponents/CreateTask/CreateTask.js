import MeetingType from './TaskItems/MeetingType';
import TimerPicker from './TaskItems/SelectDate';
import SelectTime from './TaskItems/SelectTime';

function CreateTask() {
  return (
    <div>
      <input placeholder="name task"></input>
      <MeetingType />
      <TimerPicker />
      <SelectTime />
    </div>
  );
}
export default CreateTask;
