import { useContext, useState } from "react";

// create context
export const TutorContext = useContext();

const TutorContextProvider = (props) => {
  
  const value = {};

  return (
    <TutorContext.Provider value={value}>
      {props.children}
    </TutorContext.Provider>
  );
};

export default TutorContextProvider;
