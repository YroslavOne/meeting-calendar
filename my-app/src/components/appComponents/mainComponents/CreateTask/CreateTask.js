import MeetingType from "./TaskItems/MeetingType";
import {Kanban} from "react-bootstrap-icons"
import MyApp from "./TaskItems/TimerPicker";

function CreateTask(){
    return(
        <div>
            <input
            placeholder="name task"></input>
            <MeetingType/>
            <MyApp/>
        </div>
    )
}
export default CreateTask;