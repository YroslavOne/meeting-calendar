import { Clock, GeoAlt, TextLeft } from "react-bootstrap-icons";
import MeetingType from "./TaskItems/MeetingType";
import SelectDate from "./TaskItems/SelectDate";
import SelectTime from "./TaskItems/SelectTime";
import { useContext, useState } from "react";
import "./CreateMeeting.css";
import { Context } from "../../../Context";
import { v4 as uuidv4 } from "uuid";
import EnterName from "./TaskItems/EnterName";
import LocationAndDescription from "./TaskItems/LocationAndDescription";

function CreateMeeting() {
  const { meetings, setMeetings, changeRepository, setChangeRepository } =
    useContext(Context);
  const [nameMeeting, setNameMeeting] = useState(changeRepository.name);
  const [meetingType, setMeetingType] = useState(changeRepository.typeMeeting);
  const [selectedDate, setSelectedDate] = useState(new Date(changeRepository.Date[0],changeRepository.Date[1] ,changeRepository.Date[2] ));
  const [selectedTimeStart, setSelectedTimeStart] = useState(
    changeRepository.timeStart[0] + ":" + changeRepository.timeStart[1]
  );
  const [selectedTimeEnd, setSelectedTimeEnd] = useState(
    changeRepository.timeEnd[0] + ":" +  changeRepository.timeEnd[1]
  );
  const [addLocation, setAddLocation] = useState(changeRepository.location);
  const [addDescription, setAddDescription] = useState(changeRepository.description);
  const [editOrNewMeeting, setEditOrNewMeeting] = useState(false);
  const [interactionWithTask, setInteractionWithTask] = useState(false);

  function saveOrCreateMeeting(value) {
    if (value === "Create meeting") {
      console.log("Create meeting");
      setMeetings(addMeeting());
    } else {
    }
  }

  function addMeeting() {
    const meetingList = [...meetings];
    meetingList.push({
      name: nameMeeting,
      typeMeeting: meetingType,
      Date: [
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        selectedDate.getDate(),
      ],
      timeStart: [
        Number(selectedTimeStart[0] + selectedTimeStart[1]),
        Number(selectedTimeStart[3] + selectedTimeStart[4]),
      ],
      timeEnd: [
        Number(selectedTimeEnd[0] + selectedTimeEnd[1]),
        Number(selectedTimeEnd[3] + selectedTimeEnd[4]),
      ],
      location: addLocation,
      description: addDescription,
      key: uuidv4(),
    });
    return meetingList;
  }

  function workingWithTask() {
    if (!interactionWithTask) {
      return (
        <div className="create-meeting-button">
          <button
            onClick={(e) => saveOrCreateMeeting(e.target.value)}
            value={editOrNewMeeting ? "Save meeting" : "Create meeting"}
          >
            {editOrNewMeeting ? "Save meeting" : "Create meeting"}
          </button>
          {editOrNewMeeting && <button>Delete meeting</button>}
        </div>
      );
    } else {
      return (
        <div className="create-meeting-button">
          <button>Complete</button>
          <button onClick={() => setInteractionWithTask(!interactionWithTask)}>
            Edit
          </button>
        </div>
      );
    }
  }

  return (
    <div className="create-meeting">
      <EnterName
        nameMeeting={nameMeeting}
        setNameMeeting={setNameMeeting}
        interactionWithTask={interactionWithTask}
      />
      <MeetingType
        meetingType={meetingType}
        setMeetingType={setMeetingType}
        interactionWithTask={interactionWithTask}
      />
      <div className="line"></div>
      <div className="create-meeting-data-and-time">
        <Clock className="icon-create-meeting" />
        <div>
          <div className="create-meeting-time">
            <SelectTime
              interactionWithTask={interactionWithTask}
              selectedTime={selectedTimeStart}
              setSelectedTime={setSelectedTimeStart}
            />
            &nbsp;-&nbsp;
            <SelectTime
              interactionWithTask={interactionWithTask}
              selectedTime={selectedTimeEnd}
              setSelectedTime={setSelectedTimeEnd}
            />
          </div>
          <SelectDate
            interactionWithTask={interactionWithTask}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </div>
      </div>
      <LocationAndDescription
        icon={<GeoAlt className="icon-create-meeting" />}
        value={addLocation}
        setValue={setAddLocation}
        addDescription={addDescription}
        setAddDescription={setAddDescription}
        interactionWithTask={interactionWithTask}
        placeholder={"Add location"}
      />
      <LocationAndDescription
        icon={<TextLeft className="icon-create-meeting" />}
        value={addDescription}
        setValue={setAddDescription}
        interactionWithTask={interactionWithTask}
        placeholder={"Add description"}
      />

      {workingWithTask()}
    </div>
  );
}
export default CreateMeeting;
