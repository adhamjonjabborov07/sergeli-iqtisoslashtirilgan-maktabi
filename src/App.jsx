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
import About from "./pages/AboutUs/Aboutus";
import NewsDetails from "./pages/NewsDetails/NewsDetails";
import TeacherDetails from "./pages/TeachersDetails/TeachersDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout><Home/></Layout>}/>
        <Route path="/news" element={<Layout><News/></Layout>}/>
        <Route path="/news/:id" element={<Layout><NewsDetails/></Layout>}/>
        <Route path="/teachers" element={<Layout><Teachers/></Layout>}/>
        <Route path="/teachers/:id" element={<Layout><TeacherDetails/></Layout>}/>
        <Route path="/schedule" element={<Layout><Schedule/></Layout>}/>
        <Route path="/announcements" element={<Layout><Announcements/></Layout>}/>
        <Route path="/about" element={<Layout><About/></Layout>}/>
      </Routes>
    </>
  );
}

export default App;
