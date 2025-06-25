import { useContext, useState } from "react";

// create context
export const AdminContext = useContext();

const AdminContextProvider = (props) => {
  const [atoken, setAtoken] = useState("dummy token");
  const value = {
    atoken,
    setAtoken,
  };

  return (
    <AdminContext.Provider value={value}>
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
