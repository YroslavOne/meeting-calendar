import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import {
  ChatRight,
  Kanban,
  Motherboard,
  Telephone,
} from "react-bootstrap-icons";

export const Context = React.createContext({
  meetings: "",
  setMeetings: () => {},
});

export const ContextProvider = ({ children }) => {
  const meetingItems = [
    {
      icon: <Kanban />,
      name: "Project meeting",
      background: "122, 89, 240, 0.3",
      color: "122, 89, 240, 1",
    },
    {
      icon: <ChatRight />,
      name: "Meeting",
      background: "9, 179, 196, 0.3",
      color: "9, 179, 196, 1",
    },
    {
      icon: <Telephone />,
      name: "Call",
      background: "238, 149, 21, 0.3",
      color: "238, 149, 21, 1",
    },
    {
      icon: <Motherboard />,
      name: "Other",
      background: "255, 88, 99, 0.3",
      color: "255, 88, 99, 1",
    },
  ];

  const meetingStart = [
    {
      name: "Test Meeting",
      typeMeeting: {
        background: "122, 89, 240, 0.3",
        color: "122, 89, 240, 1",
        name: "Project meeting",
      },
      Date: [
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate(),
      ],
      timeStart: [new Date().getHours(), new Date().getMinutes()],
      timeEnd: [new Date().getHours() + 1, new Date().getMinutes()],
      location: "Here",
      description: "you need to study the program",
      key: uuidv4(),
      completed: false,
    },
  ];

  const chengMeetingStart = {
    name: "New meeting",
    typeMeeting: {
      background: "122, 89, 240, 0.3",
      color: "122, 89, 240, 1",
      name: "Project meeting",
    },
    Date: [
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate(),
    ],
    timeStart: [new Date().getHours(), new Date().getMinutes()],
    timeEnd: [new Date().getHours() + 1, new Date().getMinutes()],
    location: "",
    description: "",
    key: uuidv4(),
    completed: false,
  };

  if (!localStorage?.MeetingItem) {
    localStorage.MeetingItem = JSON.stringify(meetingStart);
  }
  if (!localStorage?.ChangeRepository) {
    localStorage.ChangeRepository = JSON.stringify(chengMeetingStart);
  }

  const [meetings, setMeetings] = useState(
    JSON.parse(localStorage.MeetingItem)
  );
  const [changeRepository, setChangeRepository] = useState(chengMeetingStart);

  function actionsForMeeting(key) {
    let meetingToBeProcessed;
    meetings.map((meeting) => {
      if (meeting.key === key) {
        setChangeRepository(meeting);
        console.log(changeRepository)
      }
    });
  }

  useEffect(() => {
    localStorage.MeetingItem = JSON.stringify(meetings);
    localStorage.ChangeRepository = JSON.stringify(changeRepository);
  }, [meetings, changeRepository]);

  return (
    <Context.Provider
      value={{
        meetings,
        setMeetings,
        meetingItems,
        actionsForMeeting,
        changeRepository,
        setChangeRepository,
      }}
    >
      {children}
    </Context.Provider>
  );
};
