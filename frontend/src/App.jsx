import { Routes, Route } from "react-router-dom";
import Verify from "./pages/Verify";
import Header from "./components/Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import MyProfile from "./pages/MyProfile";
import MySessions from "./pages/MySessions";
import Session from "./pages/Session";
import Tutors from "./pages/Tutors";
import Login from "./auth/Login";

function App() {
  return (
    <>
      <h1 className="font-bold text-3xl text-center text-yellow-500">Helo</h1>
      <Header />
      {/* All Routes Here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tutors" element={<Tutors />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/tutors/:subject" element={<Tutors />} />
        <Route path="/my-profile" element={<MyProfile/>} />
        <Route path="/my-sessions" element={<MySessions/>} />
        <Route path="/session/:tutId" element={<Session/>} />
        <Route path="/verify" element={<Verify/>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
