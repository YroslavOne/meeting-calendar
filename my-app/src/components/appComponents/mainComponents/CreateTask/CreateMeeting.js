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
    meetingTemplate,
    setMeetingTemplate,
    CreateMeetingTemplate,
    newMeeting,
    setNewMeeting,
    interactionWithTask,
    setInteractionWithTask,
    setMeetingCreator,
  } = useContext(Context);
  const [nameMeeting, setNameMeeting] = useState(meetingTemplate.name);
  const [meetingType, setMeetingType] = useState(meetingTemplate.typeMeeting);
  const [selectedDate, setSelectedDate] = useState(
    new Date(
      meetingTemplate.Date[0],
      meetingTemplate.Date[1],
      meetingTemplate.Date[2]
    )
  );
  let hoursTwoValueStart = Number(
    String(meetingTemplate.timeStart[0]).length === 2
      ? meetingTemplate.timeStart[0]
      : "0" + meetingTemplate.timeStart[0]
  );
  let minutsTwoValueStart = Number(
    String(meetingTemplate.timeStart[1]).length === 2
      ? meetingTemplate.timeStart[1]
      : "0" + meetingTemplate.timeStart[1]
  );

  let hoursTwoValueEnd = Number(
    String(meetingTemplate.timeEnd[0]).length === 2
      ? meetingTemplate.timeEnd[0]
      : "0" + meetingTemplate.timeEnd[0]
  );
  let minutsTwoValueEnd = Number(
    String(meetingTemplate.timeEnd[1]).length === 2
      ? meetingTemplate.timeEnd[1]
      : "0" + meetingTemplate.timeEnd[1]
  );

  const [selectedTimeStart, setSelectedTimeStart] = useState(
    hoursTwoValueStart + ":" + minutsTwoValueStart
  );
  const [selectedTimeEnd, setSelectedTimeEnd] = useState(
    hoursTwoValueEnd + ":" + minutsTwoValueEnd
  );
  const [addLocation, setAddLocation] = useState(meetingTemplate.location);
  const [addDescription, setAddDescription] = useState(
    meetingTemplate.description
  );

  function clickClose() {
    setInteractionWithTask(false);
    setNewMeeting(true);
    setMeetingCreator(false);
    setMeetingTemplate(CreateMeetingTemplate);
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
      if (meeting.key === meetingTemplate.key) {
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
