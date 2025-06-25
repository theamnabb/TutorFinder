import { createContext } from "react";

// create context
export const TutorContext = createContext();

const TutorContextProvider = (props) => {
  
  const value = {};

  return (
    <TutorContext.Provider value={value}>
      {props.children}
    </TutorContext.Provider>
  );
};

export default TutorContextProvider;
