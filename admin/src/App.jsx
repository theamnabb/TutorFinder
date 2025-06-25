import React, { useContext } from "react";
import { AdminContext } from "./context/AdminContext";
import AppRoutes from "./routes/Routes";
import Login from "./pages/Auth/Login"; 

const App = () => {
  const { atoken } = useContext(AdminContext);

  return (
    <main>
      <div>
        {atoken ? (
          <AppRoutes /> // Render routes if token exists
        ) : (
          <Login /> // Show login page if not logged in
        )}
      </div>
    </main>
  );
};

export default App;
