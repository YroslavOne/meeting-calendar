import { Clock, GeoAlt, TextLeft } from 'react-bootstrap-icons';
import MeetingType from './TaskItems/MeetingType';
import SelectDate from './TaskItems/SelectDate';
import SelectTime from './TaskItems/SelectTime';
import { useContext, useState } from 'react';
import './CreateMeeting.css';
import { Context } from '../../../Context';
import { v4 as uuidv4 } from 'uuid';
import EnterName from './TaskItems/EnterName';
import LocationAndDescription from './TaskItems/LocationAndDescription';

function CreateMeeting() {
  const { meetings, setMeetings } = useContext(Context);
  const [nameMeeting, setNameMeeting] = useState('new meeting');
  const [meetingType, setMeetingType] = useState({
    background: '122, 89, 240, 0.3',
    color: '122, 89, 240, 1',
    name: 'Project meeting',
  });
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTimeStart, setSelectedTimeStart] = useState(
    new Date().getHours() + ':' + new Date().getMinutes()
  );
  const [selectedTimeEnd, setSelectedTimeEnd] = useState(
    new Date().getHours() + 1 + ':' + new Date().getMinutes()
  );
  const [addLocation, setAddLocation] = useState('');
  const [addDescription, setAddDescription] = useState('');
  const [editOrNewMeeting, setEditOrNewMeeting] = useState(true);
  const [interactionWithTask, setInteractionWithTask] = useState(true);

  function saveOrCreateMeeting(value) {
    if (value === 'Create meeting') {
      console.log('Create meeting');
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
            value={editOrNewMeeting ? 'Save meeting' : 'Create meeting'}
          >
            {editOrNewMeeting ? 'Save meeting' : 'Create meeting'}
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
        placeholder={'Add location'}
      />
      <LocationAndDescription
        icon={<TextLeft className="icon-create-meeting" />}
        value={addDescription}
        setValue={setAddDescription}
        interactionWithTask={interactionWithTask}
        placeholder={'Add description'}
      />

      {workingWithTask()}
    </div>
  );
}
export default CreateMeeting;
