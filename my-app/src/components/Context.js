import React, { useState, useEffect } from "react";
import { ChangeMeetingStart, MeetingStart, MeetingItems } from "./Constants";

export const Context = React.createContext({
  meetings: "",
  setMeetings: () => {},
  changeRepository: "",
  setChangeRepository: () => {},
  createWindow: "",
  setCreateWindow: () => {},
  dateForDisplay: "",
  setDateForDisplay: () => {},
  newMeeting: "",
  setNewMeeting: () => {},
  interactionWithTask: "",
  setInteractionWithTask: () => {},
  dateForScreenOutput: "",
  setDateForScreenOutput: () => {},
  meetingsAfterSearch: "",
  setMeetingsAfterSearch: () => {},
  searchValue: "",
  setSearchValue: () => {},
});

export const ContextProvider = ({ children }) => {
  if (!localStorage?.MeetingItem) {
    localStorage.MeetingItem = JSON.stringify(MeetingStart);
  }

  const [meetings, setMeetings] = useState(
    JSON.parse(localStorage.MeetingItem)
  );
  const [meetingsAfterSearch, setMeetingsAfterSearch] = useState(meetings);
  const [changeRepository, setChangeRepository] = useState(ChangeMeetingStart());
  const [createWindow, setCreateWindow] = useState(false);
  const [dateForDisplay, setDateForDisplay] = useState(new Date());
  const [newMeeting, setNewMeeting] = useState(true);
  const [interactionWithTask, setInteractionWithTask] = useState(false);
  const [dateForScreenOutput, setDateForScreenOutput] = useState("");
  const [searchValue, setSearchValue] = useState("");


  function actionsForMeeting(key) {
    meetings.map((meeting) => {
      if (meeting.key === key) {
        setInteractionWithTask(true);
        setChangeRepository(meeting);
        setNewMeeting(false);
        setCreateWindow(true);
      } else {
        setChangeRepository(ChangeMeetingStart());
        setCreateWindow(true);
      }
    });
  }

  useEffect(() => {
    localStorage.MeetingItem = JSON.stringify(meetings);
  }, [meetings]);

  useEffect(() => {
    if (searchValue != "") {
      let temporaryMeetings = meetings.filter((obj) =>
        obj.name.includes(searchValue)
      );
      setMeetingsAfterSearch(temporaryMeetings);
    } else {
      let temporaryMeetings = [...meetings];
      setMeetingsAfterSearch(temporaryMeetings);
    }
  }, [searchValue, meetings]);

  return (
    <Context.Provider
      value={{
        meetings,
        setMeetings,
        MeetingItems,
        actionsForMeeting,
        changeRepository,
        setChangeRepository,
        createWindow,
        setCreateWindow,
        dateForDisplay,
        setDateForDisplay,
        newMeeting,
        setNewMeeting,
        interactionWithTask,
        setInteractionWithTask,
        ChangeMeetingStart,
        dateForScreenOutput,
        setDateForScreenOutput,
        meetingsAfterSearch,
        setMeetingsAfterSearch,
        searchValue,
        setSearchValue,
      }}
    >
      {children}
    </Context.Provider>
  );
};
