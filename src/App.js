// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.scss";
import Main from "./containers/Main";
import ProjectExperience from "./pages/ProjectExperience";

// Define projects and their media
const VDI_ADC = {
  projectName: "VDI-ADC",
  projectDetails: "",
  media: [
    { type: 'text', src: 'VDI-ADC is a student team that designs and builds a fully autonomous electric' },
    { type: 'youtube', src: 'https://www.youtube.com/embed/gpV-4e3cvzg', format: '', width: '896', height: '504' },
    { type: 'text', src: 'VDI-ADC is a student team that designs and builds a fully autonomous electric' },
    { type: 'image', src: require('./assets/images/adc_car.jpg'), alt: 'The Driving Dutchman', width: '58.2%', height: 'auto' }
  ]
};

const VERA = {
  projectName: "VERA",
  projectDetails: "Sensor modules and serializer for a simulation environment in UE5",
  media: [
    { type: 'image', src: './assets/images/vera_thumbnail.png', alt: 'VERA thumbnail' },
    { type: 'video', src: 'path/to/video1.mp4', format: 'video/mp4' }
  ]
};

const AutoBin = {
  projectName: "AutoBin",
  projectDetails: "Ship telemetry and control communication protocol",
  media: [
    { type: 'image', src: './assets/images/autobin_thumbnail.png', alt: 'AutoBin thumbnail' }
  ]
};

const SpotThePot = {
  projectName: "Spot the Pot",
  projectDetails: "Fully automated plant watering robot on a tight budget",
  media: [
    { type: 'image', src: './assets/images/spot_the_pot_thumbnail.png', alt: 'Spot the Pot thumbnail' }
  ]
};

const SLAM_ObjectDetection = {
  projectName: "SLAM-based Object Detection",
  projectDetails: "Where it all started: my first project in robotics",
  media: [
    { type: 'image', src: './assets/images/turtlebot.png', alt: 'SLAM-based Object Detection project' }
  ]
};

const CoboTank = {
  projectName: "CoboTank",
  projectDetails: "Inverse Kinematics implementation using ROS",
  media: [
    { type: 'image', src: './assets/images/cobotank_thumbnail.png', alt: 'CoboTank thumbnail' }
  ]
};

const LAiLA = {
  projectName: "LAiLA",
  projectDetails: "Full-stack optimization toolbox development for Airbus",
  media: [
    { type: 'image', src: './assets/images/laila_thumbnail.png', alt: 'LAiLA thumbnail' }
  ]
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/developerFolio" element={<Main />} />
        <Route path="/developerFolio/projectExperience/VDI_ADC" element={<ProjectExperience {...VDI_ADC} />} />
        <Route path="/developerFolio/projectExperience/VERA" element={<ProjectExperience {...VERA} />} />
        <Route path="/developerFolio/projectExperience/AutoBin" element={<ProjectExperience {...AutoBin} />} />
        <Route path="/developerFolio/projectExperience/SpotThePot" element={<ProjectExperience {...SpotThePot} />} />
        <Route path="/developerFolio/projectExperience/SLAM_ObjectDetection" element={<ProjectExperience {...SLAM_ObjectDetection} />} />
        <Route path="/developerFolio/projectExperience/CoboTank" element={<ProjectExperience {...CoboTank} />} />
        <Route path="/developerFolio/projectExperience/LAiLA" element={<ProjectExperience {...LAiLA} />} />
      </Routes>
    </Router>
  );
};

export default App;