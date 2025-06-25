import { useContext, useState } from "react";

// create context
export const AppContext = useContext();

const AppContextProvider = (props) => {
  
  const value = {};

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
