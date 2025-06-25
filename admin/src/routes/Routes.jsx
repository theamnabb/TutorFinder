import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/admin/Dashboard";
import AllSessions from "../pages/admin/AllSessions";
import AddTutor from "../pages/admin/AddTutor";
import TutorsList from "../pages/admin/TutorsList";

const AppRoutes = () => {
  return (
    <>
    <Routes>
        {/* admin Routes */}
        <Route path="/" element={<></>} />
        <Route path="/admin-dashboard" element={<Dashboard/>} />
        <Route path="/all-sessions" element={<AllSessions/>} />
        <Route path="/add-tutor" element={<AddTutor/>} />
        <Route path="/tutors-list" element={<TutorsList/>} />

    </Routes>
    </>
  )
}

export default AppRoutes