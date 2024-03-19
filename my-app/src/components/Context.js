import React, { useState, useEffect } from "react";
import { CreateMeetingTemplate, MeetingStart, MeetingItems } from "./Constants";

export const Context = React.createContext({
  meetings: "",
  setMeetings: () => {},
  meetingTemplate: "",
  setMeetingTemplate: () => {},
  meetingCreator: "",
  setMeetingCreator: () => {},
  calendarBaseDate: "",
  setCalendarBaseDate: () => {},
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
  const [meetingTemplate, setMeetingTemplate] = useState(
    CreateMeetingTemplate()
  );
  const [meetingCreator, setMeetingCreator] = useState(false);
  const [calendarBaseDate, setCalendarBaseDate] = useState(new Date());
  const [newMeeting, setNewMeeting] = useState(true);
  const [interactionWithTask, setInteractionWithTask] = useState(false);
  const [dateForScreenOutput, setDateForScreenOutput] = useState("");
  const [searchValue, setSearchValue] = useState("");

  function actionsForMeeting(key) {
    if (key === "none") {
      setMeetingTemplate(CreateMeetingTemplate());
      setMeetingCreator(true);
    } else {
      meetings.map((meeting) => {
        if (meeting.key === key) {
          setInteractionWithTask(true);
          setMeetingTemplate(meeting);
          setNewMeeting(false);
          setMeetingCreator(true);
        }
      });
    }
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
        meetingTemplate,
        setMeetingTemplate,
        meetingCreator,
        setMeetingCreator,
        calendarBaseDate,
        setCalendarBaseDate,
        newMeeting,
        setNewMeeting,
        interactionWithTask,
        setInteractionWithTask,
        CreateMeetingTemplate,
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
