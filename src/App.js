import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./App.scss";
import Main from "./containers/Main";
import ProjectExperience from "./pages/ProjectExperience";

// Define projects and their media
const VDI_ADC = {
  projectName: "VDI-ADC",
  projectDetails: "",
  media: [
    {
      type: "text",
      src: "Summary about the project. Full adventure awaits you when you scroll down!"
    },
    {
      type: "youtube",
      src: "https://www.youtube.com/embed/gpV-4e3cvzg",
      format: "",
      width: "896",
      height: "504"
    },
    {
      type: "text",
      src: "Our pride and joy: The Driving Dutchman. The cool story behind the name is a story worth telling."
    },
    {
      type: "image",
      src: require("./assets/images/adc_car.jpg"),
      alt: "The Driving Dutchman",
      width: "58.2%",
      height: "auto"
    },
    {
      type: "text",
      src: "Our team. A healthy mixture of Software Engineers, Mechanical Engineers, Robotcists, and our own AI-Expert"
    },
    {
      type: "image",
      src: require("./assets/images/adc_team_full.jpg"),
      alt: "The Driving Dutchman",
      width: "58.2%",
      height: "auto"
    },
    {type: "text", src: "Our adventure behind the scenes. Enjoy!"},
    {
      type: "youtube",
      src: "https://www.youtube.com/embed/5qpjiT7AypI?si=C7rqwqym3LERGoAZ",
      format: "",
      width: "896",
      height: "504"
    }
  ]
};

const VERA = {
  projectName: "VERA",
  projectDetails: "",
  media: [
    {
      type: "text",
      src: "As luck would have I did not document my contributions to the project as much as I should have. Nevertheless, the video shows my self-built RADAR implementation inside the unity engine. The output of the module is encoded in the Asterix Category 240 as per the Eurocontrol specifications. The encoder was also self developed.",
      width: "58.2%"
    },
    {
      type: "youtube",
      src: "https://www.youtube.com/embed/pQkJRdXr4DQ?si=ee5mih3x0wdZpbGq",
      format: "",
      width: "896",
      height: "504"
    },
    {
      type: "text",
      src: "Below is an early implemntation of the LIDAR module. Several submodules were developed to simulate noise. The imperfect hits on the blue box is a visulization of these submodules.",
      width: "58.2%"
    },
    {
      type: "image",
      src: require("./assets/images/vera_thumbnail.png"),
      alt: "VERA thumbnail",
      width: "50%",
      height: "auto"
    }
  ]
};

const AutoBin = {
  projectName: "AutoBin",
  projectDetails: "",
  media: [
    {
      type: "text",
      src: "Developed a ROS-based interface linking ship telemetry and sensor measurements with control and navigation systems. The project succeeded in automating the navigation and control of the ship Niedersachsen22, and its digital twin, in inland water and harbor environments",
      width: "58.2%"
    },
    {
      type: "text",
      src: "Here is a snippet of the digital during an automated run. Both navigation and control were fully autonomus.",
      width: "58.2%"
    },
    {
      type: "youtube",
      src: "https://www.youtube.com/embed/285-XWohSZE?si=-XsOih34yxkRCUm1",
      format: "",
      width: "896",
      height: "504"
    },
    {
      type: "text",
      src: "And here is a snippet of the real ship doing exactly the same thing, just not in a tight canal for obvious reasons :)",
      width: "58.2%"
    },
    {
      type: "youtube",
      src: "https://www.youtube.com/embed/a8iG7gPp4Rs?si=XDM-NDpbP5V6Aazc",
      format: "",
      width: "896",
      height: "504"
    }
  ]
};

const SpotThePot = {
  projectName: "Spot the Pot",
  projectDetails: "",
  media: [
    {
      type: "text",
      src: "Your fully automated plant watering robot on a tight budget",
      width: "58.2%"
    },
    {
      type: "youtube",
      src: "https://www.youtube.com/embed/exs4d8Cfg9Q?si=i0JDB9DrE-cQLv-a",
      format: "",
      width: "896",
      height: "504"
    }
  ]
};

const SLAM_ObjectDetection = {
  projectName: "SLAM-based Object Detection",
  projectDetails: "",
  media: [
    {
      type: "text",
      src: "Where it all started: my first project in robotics. Check out that cute little buddy SLAMing away in me room that was rearranged to resemble a warehouse.",
      width: "58.2%"
    },
    {
      type: "youtube",
      src: "https://www.youtube.com/embed/aDfgBorAYXQ",
      format: "",
      width: "896",
      height: "504"
    },
    {
      type: "text",
      src: "The project won first place at the yearly contest held by the Chair of Mechatronics at the University of Duisburg-Essen",
      width: "58.2%"
    },
    {
      type: "image",
      src: require("./assets/images/turtlebot_prize.png"),
      alt: "SLAM-based Object Detection project",
      width: "40%",
      height: "auto"
    },
    {
      type: "text",
      src: "The idea is to create a 2D map of the environment and use object detection to identify objects based on their toplogy. It all started with a simulation.",
      width: "58.2%"
    },
    {
      type: "image",
      src: require("./assets/images/turtlebot_sim.png"),
      alt: "SLAM-based Object Detection project",
      width: "40%",
      height: "auto"
    },
    {
      type: "image",
      src: require("./assets/images/turtlebot_sim_scan.png"),
      alt: "SLAM-based Object Detection project",
      width: "40%",
      height: "auto"
    },
    {
      type: "image",
      src: require("./assets/images/turtlebot_sim_recognition.png"),
      alt: "SLAM-based Object Detection project",
      width: "40%",
      height: "auto"
    },
    {
      type: "text",
      src: "And then I moved on to verify the concept in real environments, such as the repurposed lab where I was working at the time (I know, I repurpose a lot).",
      width: "58.2%"
    },
    {
      type: "image",
      src: require("./assets/images/turtlebot_real_environment_lab.png"),
      alt: "SLAM-based Object Detection project",
      width: "40%",
      height: "auto"
    },
    {
      type: "image",
      src: require("./assets/images/turtlebot_real_environment_lab_scan.png"),
      alt: "SLAM-based Object Detection project",
      width: "40%",
      height: "auto"
    },
    {
      type: "image",
      src: require("./assets/images/turtlebot_real_environment_lab_recognition.png"),
      alt: "SLAM-based Object Detection project",
      width: "40%",
      height: "auto"
    }
  ]
};

const CoboTank = {
  projectName: "CoboTank",
  projectDetails: "",
  media: [
    {
      type: "text",
      src: "Another project where ther was much more work than there was documentation. Below are pictures of the robots that for which I helpeded impement inverse kinematicss using ROS.",
      width: "58.2%"
    },
    {
      type: "image",
      src: require("./assets/images/cobotank_1.jpg"),
      alt: "CoboTank",
      width: "40%",
      height: "auto"
    },
    {
      type: "image",
      src: require("./assets/images/cobotank_2.jpg"),
      alt: "CoboTank",
      width: "40%",
      height: "auto"
    },
    {
      type: "text",
      src: "The modules we implemented were used as part of an automation show case at the opening of the facility done by the state minister of transportation",
      width: "58.2%"
    },
    {
      type: "image",
      src: require("./assets/images/cobotank_minister.jpg"),
      alt: "CoboTank",
      width: "40%",
      height: "auto"
    }
  ]
};

const LAiLA = {
  projectName: "LAiLA",
  projectDetails: "",
  media: [
    {
      type: "text",
      src: "An intense moment with the AFP robot as I was doing my first ever laminate print",
      width: "58.2%"
    },
    {
      type: "image",
      src: require("./assets/images/laila_thumbnail.png"),
      alt: "Me and the AFP robot",
      width: "58.2%",
      height: "auto"
    },
    {
      type: "text",
      src: "Carbon fiber composite laminates achieve their required engineering properties by varying the angle of the fibers in each layer. Traditionally, these angles are fixed at 0°, 45°, 90°, and -45° per layer.",
      width: "58.2%"
    },
    {
      type: "text",
      src: "For a specific load scenario, the most optimal combination of these fixed angles is selected to minimise the mass while ensuring the structural integrity with an adequate safety margin. However, this traditional approach can be refined, i.e., the mass can be further minimised, by introducing variable angle layers. This refinement increases the number of parameters needed to define the final laminate. Thus, a suitable optimization process for the parameters that describe the variable angle tow (VAT) and the number of layers must be implemented so that the mass is minimal for a given load case. The optimization process must further consider the viability of the chosen parameters imposed by the hardware restrictions of AFP and the physical properties of the carbon fiber material so that the produced laminate is free of defects.",
      width: "58.2%"
    },
    {
      type: "image",
      src: require("./assets/images/laila_vat.png"),
      alt: "Me and the AFP robot",
      width: "58.2%",
      height: "auto"
    },
    {
      type: "text",
      src: "What I am currently doing at Airbus is building a full-stack optimizer to help find the right parameters for the VAT. The optimizer is scalabe, has visualization featuers, and is able to communicate with with multiple worker instances over the cloud.",
      width: "58.2%"
    },
    {
      type: "image",
      src: require("./assets/images/laila_gui.png"),
      alt: "LAiLA GUI",
      width: "58.2%",
      height: "auto"
    }
  ]
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

const App = () => {
  return (
    <Router basename="/developerFolio">
      <Routes>
        <Route path="/" element={<Main />} />
        {projects.map((project, index) => (
          <Route key={index} path={project.path} element={project.element} />
        ))}
      </Routes>
    </Router>
  );
};

export default App;
