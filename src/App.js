import React from "react";
import "./App.scss";
import Main from "./containers/Main";
import ProjectExperience from "./pages/ProjectExperience";

// Define projects and their media
const VDI_ADC = {
  projectName: "VDI-ADC",
  projectDetails: ""
};

const VERA = {
  projectName: "VERA",
  projectDetails: ""
};

const AutoBin = {
  projectName: "AutoBin",
  projectDetails: ""
};

const SpotThePot = {
  projectName: "Spot the Pot",
  projectDetails: ""
};

const SLAM_ObjectDetection = {
  projectName: "SLAM-based Object Detection",
  projectDetails: ""
};

const CoboTank = {
  projectName: "CoboTank",
  projectDetails: ""
};

const LAiLA = {
  projectName: "LAiLA",
  projectDetails: ""
};

export const projects = [
  {
    path: "/projectExperience/VDI_ADC",
    element: <ProjectExperience {...VDI_ADC} />,
    projectName: "VDI-ADC"
  },
  {
    path: "/projectExperience/VERA",
    element: <ProjectExperience {...VERA} />,
    projectName: "VERA"
  },
  {
    path: "/projectExperience/AutoBin",
    element: <ProjectExperience {...AutoBin} />,
    projectName: "AutoBin"
  },
  {
    path: "/projectExperience/SpotThePot",
    element: <ProjectExperience {...SpotThePot} />,
    projectName: "Spot the Pot"
  },
  {
    path: "/projectExperience/SLAM_ObjectDetection",
    element: <ProjectExperience {...SLAM_ObjectDetection} />,
    projectName: "SLAM-based Object Detection"
  },
  {
    path: "/projectExperience/CoboTank",
    element: <ProjectExperience {...CoboTank} />,
    projectName: "CoboTank"
  },
  {
    path: "/projectExperience/LAiLA",
    element: <ProjectExperience {...LAiLA} />,
    projectName: "LAiLA"
  }
];

function App() {
  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
