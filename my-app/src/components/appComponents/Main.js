import { useContext } from 'react';
import { Context } from '../Context';
import Calendar from './mainComponents/Calendar';
// import { useState } from 'react';
import CreateMeeting from './mainComponents/CreateTask/CreateMeeting';
import MeetingToday from './mainComponents/MeetingToday/MeetingToday';
import './Main.css';

function Main() {
  const { createWindow, setCreateWindow } = useContext(Context);
  return (
    <div>
      <div className="main-calendar-and-meetingtoday">
        <Calendar />
        <MeetingToday />
        {createWindow && <CreateMeeting />}
      </div>
      <div>
        <button
          onClick={() => {
            setCreateWindow(true);
          }}
        >
          add
        </button>
      </div>
    </div>
  );
}
export default Main;
