import { useState } from "react";
import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/layout";
import Home from "./pages/Home/home";
import News from "./pages/News/news";
import Teachers from "./pages/Teachers/teachers";
import Schedule from "./pages/Schedule/schedule";
import Announcements from "./pages/Announcements/announcements";
import Contactus from "./pages/Contactus/Contactus";
import AdditionDetails from './pages/AdditionDetails/AdditionDetails'
import NewsDetails from "./pages/NewsDetails/NewsDetails";
import Addition from "./pages/Addition/addition"
import TeacherDetails from "./pages/TeachersDetails/TeachersDetails";
import Noutfound from "./pages/Notfound/notfound";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/news" element={<Layout><News /></Layout>} />
        <Route path="/news/:id" element={<Layout><NewsDetails /></Layout>} />
        <Route path="/teachers" element={<Layout><Teachers /></Layout>} />
        <Route path="/teachers/:id" element={<Layout><TeacherDetails /></Layout>} />
        <Route path="/schedule" element={<Layout><Schedule /></Layout>} />
        <Route path="/addition/details" element={<Layout><AdditionDetails /></Layout>} />
        <Route path="/announcements" element={<Layout><Announcements /></Layout>} />
        <Route path="/addition" element={<Layout><Addition /></Layout>} />
        <Route path="/contactus" element={<Layout><Contactus /></Layout>} />
        <Route path="*" element={<Layout><Noutfound /></Layout>} />
      </Routes>
    </>
  );
}

export default App;
