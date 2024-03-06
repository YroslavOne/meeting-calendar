import { Clock, GeoAlt, TextLeft, X } from "react-bootstrap-icons";
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
  const {
    meetings,
    setMeetings,
    changeRepository,
    setChangeRepository,
    changeMeetingStart,
    newMeeting,
    setNewMeeting,
    interactionWithTask,
    setInteractionWithTask,
    setCreateWindow,
  } = useContext(Context);
  const [nameMeeting, setNameMeeting] = useState(changeRepository.name);
  const [meetingType, setMeetingType] = useState(changeRepository.typeMeeting);
  const [selectedDate, setSelectedDate] = useState(
    new Date(
      changeRepository.Date[0],
      changeRepository.Date[1],
      changeRepository.Date[2]
    )
  );
  let hoursTwoValueStart = Number(
    String(changeRepository.timeStart[0]).length === 2
      ? changeRepository.timeStart[0]
      : "0" + changeRepository.timeStart[0]
  );
  let minutsTwoValueStart = Number(
    String(changeRepository.timeStart[1]).length === 2
      ? changeRepository.timeStart[1]
      : "0" + changeRepository.timeStart[1]
  );

  let hoursTwoValueEnd = Number(
    String(changeRepository.timeEnd[0]).length === 2
      ? changeRepository.timeEnd[0]
      : "0" + changeRepository.timeEnd[0]
  );
  let minutsTwoValueEnd = Number(
    String(changeRepository.timeEnd[1]).length === 2
      ? changeRepository.timeEnd[1]
      : "0" + changeRepository.timeEnd[1]
  );

  const [selectedTimeStart, setSelectedTimeStart] = useState(
    hoursTwoValueStart + ":" + minutsTwoValueStart
  );
  const [selectedTimeEnd, setSelectedTimeEnd] = useState(
    hoursTwoValueEnd + ":" + minutsTwoValueEnd
  );
  const [addLocation, setAddLocation] = useState(changeRepository.location);
  const [addDescription, setAddDescription] = useState(
    changeRepository.description
  );

  function clickClose() {
    setInteractionWithTask(false);
    setNewMeeting(true);
    setCreateWindow(false);
    setChangeRepository(changeMeetingStart);
  }

  function saveOrCreateMeeting(value) {
    if (value === "Create meeting") {
      setMeetings(addMeeting());
    } else if (value === "Save meeting") {
      let indexForEdit = searchItemMeeting();
      meetings[indexForEdit].name = nameMeeting;
      meetings[indexForEdit].typeMeeting = meetingType;
      meetings[indexForEdit].Date = [
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        selectedDate.getDate(),
      ];
      meetings[indexForEdit].timeStart = [
        Number(selectedTimeStart[0] + selectedTimeStart[1]),
        Number(selectedTimeStart[3] + selectedTimeStart[4]),
      ];
      meetings[indexForEdit].timeEnd = [
        Number(selectedTimeEnd[0] + selectedTimeEnd[1]),
        Number(selectedTimeEnd[3] + selectedTimeEnd[4]),
      ];
      meetings[indexForEdit].location = addLocation;
      meetings[indexForEdit].description = addDescription;
    }
    clickClose();
  }
  function deleteMeeting() {
    let meetingList = [...meetings];
    let indexForDelete = searchItemMeeting();
    meetingList.splice(indexForDelete, 1);
    setMeetings(meetingList);
    clickClose();
  }
  function complete() {
    let meetingList = [...meetings];
    let indexForDelete = searchItemMeeting();
    meetingList[indexForDelete].completed = true;
    clickClose();
  }

  function searchItemMeeting() {
    let indexMeeting;
    meetings.map((meeting, index) => {
      if (meeting.key === changeRepository.key) {
        indexMeeting = index;
      }
    });
    return indexMeeting;
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
            value={newMeeting ? "Create meeting" : "Save meeting"}
          >
            {newMeeting ? "Create meeting" : "Save meeting"}
          </button>
          {!newMeeting && (
            <button onClick={() => deleteMeeting()}>Delete meeting</button>
          )}
        </div>
      );
    } else {
      return (
        <div className="create-meeting-button">
          <button onClick={() => complete()}>Complete</button>
          <button onClick={() => setInteractionWithTask(!interactionWithTask)}>
            Edit
          </button>
        </div>
      );
    }
  }

  return (
    <div className="create-meeting">
      <div className="create-meeting-name-and-close">
        <EnterName
          nameMeeting={nameMeeting}
          setNameMeeting={setNameMeeting}
          interactionWithTask={interactionWithTask}
        />
        <X className="create-meeting-close" onClick={() => clickClose()} />
      </div>
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
