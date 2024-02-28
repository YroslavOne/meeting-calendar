import { Clock, GeoAlt, TextLeft } from 'react-bootstrap-icons';
import MeetingType from './TaskItems/MeetingType';
import SelectDate from './TaskItems/SelectDate';
import SelectTime from './TaskItems/SelectTime';
import { useContext, useState } from 'react';
import './CreateMeeting.css';
import { Context } from '../../../Context';
import { v4 as uuidv4 } from 'uuid';

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
  const [newMeeting, setNewMeeting] = useState(false);

  console.log(meetingType);
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

  return (
    <div className="create-meeting">
      <input
        className="create-meeting-name"
        value={nameMeeting}
        onChange={(e) => setNameMeeting(e.target.value)}
        placeholder="name task"
      ></input>
      <MeetingType meetingType={meetingType} setMeetingType={setMeetingType} />
      <div className="line"></div>
      <div className="create-meeting-data-and-time">
        <Clock className="icon-create-meeting" />
        <div>
          <div className="create-meeting-time">
            <SelectTime
              selectedTime={selectedTimeStart}
              setSelectedTime={setSelectedTimeStart}
            />
            -{' '}
            <SelectTime
              selectedTime={selectedTimeEnd}
              setSelectedTime={setSelectedTimeEnd}
            />
          </div>
          <SelectDate
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </div>
      </div>

      <div className="create-meeting-location">
        <GeoAlt className="icon-create-meeting" />
        <input
          value={addLocation}
          onChange={(e) => setAddLocation(e.target.value)}
          placeholder="Add location"
        ></input>
      </div>
      <div className="create-meeting-description">
        <TextLeft className="icon-create-meeting" />
        <input
          value={addDescription}
          onChange={(e) => setAddDescription(e.target.value)}
          placeholder="Add description"
        ></input>
      </div>
      <div className="create-meeting-button">
        <button
          onClick={(e) => saveOrCreateMeeting(e.target.value)}
          value={newMeeting ? 'Save meeting' : 'Create meeting'}
        >
          {newMeeting ? 'Save meeting' : 'Create meeting'}
        </button>

        {newMeeting && <button>Delete meeting</button>}
      </div>
    </div>
  );
}
export default CreateMeeting;
