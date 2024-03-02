import { useContext } from 'react';
import { Context } from '../Context';
import Calendar from './mainComponents/Calendar';
// import { useState } from 'react';
import CreateMeeting from './mainComponents/CreateTask/CreateMeeting';
import MeetingToday from './mainComponents/MeetingToday/MeetingToday';

function Main() {
  const { createWindow, setCreateWindow } = useContext(Context);
  return (
    <div>
      <Calendar />
      {createWindow && <CreateMeeting />}
      <MeetingToday />
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
