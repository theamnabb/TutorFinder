import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Tutors from "../pages/Tutors";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import MyProfile from "../pages/MyProfile";
import MySessions from "../pages/MySessions";
import Session from "../pages/Session";
import Verify from "../pages/Verify";
import Login from "../pages/auth/Login";
import Layout from "../components/common/Layout";
import TermTutors from "@/pages/TermTutors";
import TermStudents from "@/pages/TermStudents";
const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout showFooter showHeader>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/tutors"
          element={
            <Layout showFooter showHeader>
              <Tutors />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout showFooter showHeader>
              <Contact />
            </Layout>
          }
        />
        <Route
          path="/blog"
          element={
            <Layout showFooter showHeader>
              <Blog />
            </Layout>
          }
        />

        <Route
          path="/my-profile"
          element={
            <Layout showFooter showHeader>
              <MyProfile />
            </Layout>
          }
        />
        <Route
          path="/tutors/:subject"
          element={
            <Layout showFooter showHeader>
              <Tutors />
            </Layout>
          }
        />
        <Route
          path="/session/:tutId"
          element={
            <Layout showFooter showHeader>
              <Session />
            </Layout>
          }
        />
        <Route
          path="/my-sessions"
          element={
            <Layout showFooter showHeader>
              <MySessions />
            </Layout>
          }
        />

        <Route
          path="/term-tutors"
          element={
            <Layout showFooter showHeader>
              <TermTutors />
            </Layout>
          }
        />

        <Route
          path="/term-students"
          element={
            <Layout showFooter showHeader>
              <TermStudents />
            </Layout>
          }
        />

        <Route path="/verify" element={<Verify />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
