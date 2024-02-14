import React, { useState } from "react";

export const Context = React.createContext({
  selectedFirst: "X",
  setSelectedFirst: () => {},
});

export const ContextProvider = ({ children }) => {

  const [selectedFirst, setSelectedFirst] = useState("X");


  return (
    <Context.Provider
      value={{
        selectedFirst,
        setSelectedFirst
      }}
    >
      {children}
    </Context.Provider>
  );
};
