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
      background: "122, 89, 240, 0.3",
      color: "122, 89, 240, 1",
    },
    {
      icon: <ChatRight/>,
      name: "Meeting",
      background: "9, 179, 196, 0.3",
      color: "9, 179, 196, 1",
    },
    {
      icon: <Telephone/>,
      name: "Call",
      background: "238, 149, 21, 0.3",
      color: "238, 149, 21, 1",
    },
    {
      icon: <Motherboard/>,
      name: "Other",
      background: "255, 88, 99, 0.3",
      color: "255, 88, 99, 1",
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
