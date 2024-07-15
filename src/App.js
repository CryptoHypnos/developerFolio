// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.scss";
import Main from "./containers/Main";
import ProjectExperience from "./pages/ProjectExperience";

// Define projects and their media
const VERA = {
  projectName: "VERA",
  projectDetails: "Description about VERA here",
  media: [
    { type: 'image', src: 'path/to/image1.jpg', alt: 'Image 1 description' },
    { type: 'video', src: 'path/to/video1.mp4', format: 'video/mp4' }
  ]
};

const CoboTank = {
  projectName: "CoboTank",
  projectDetails: "Details of Project 2",
  media: [
    { type: 'video', src: 'path/to/video2.mp4', format: 'video/mp4' },
    { type: 'image', src: 'path/to/image2.jpg', alt: 'Image 2 description' }
  ]
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/developerFolio" element={<Main />} />
        <Route path="/developerFolio/projectExperience/VERA" element={<ProjectExperience {...VERA} />} />
        <Route path="/developerFolio/projectExperience/CoboTank" element={<ProjectExperience {...CoboTank} />} />
      </Routes>
    </Router>
  );
};

export default App;