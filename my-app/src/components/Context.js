import React, { useState } from "react";
import { ChatRight, Kanban, Motherboard, Telephone } from "react-bootstrap-icons";

export const Context = React.createContext({
  selectedFirst: "X",
  setSelectedFirst: () => {},
});

export const ContextProvider = ({ children }) => {
  const meetingItems = [
    {
      icon: <Kanban/>,
      name: "Project meeting",
      className: "red",
    },
    {
      icon: <ChatRight/>,
      name: "Meeting",
      className: "red",
    },
    {
      icon: <Telephone/>,
      name: "Call",
      className: "red",
    },
    {
      icon: <Motherboard/>,
      name: "Other",
      className: "red",
    },
  ];

  const [selectedFirst, setSelectedFirst] = useState("X");

  return (
    <Context.Provider
      value={{
        selectedFirst,
        setSelectedFirst,
        meetingItems
      }}
    >
      {children}
    </Context.Provider>
  );
};
