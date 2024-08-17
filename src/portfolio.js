/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Rachid Alhourani",
  title: "Greetings, I'm Rachid",
  subTitle: emoji(
    "A passionate Roboticist 🦾 with proficiency in multiple programming languages, simulators, physics engines, and the Robot Operating System (ROS)."
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/CryptoHypnos",
  linkedin: "https://www.linkedin.com/in/rachid-alhourani-98213214b/",
  gmail: "rachidalhourani@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Build, tinker with, and animate robots",
  skills: [
    emoji("⚡ Develop autonomous robotic systems"),
    emoji(
      "⚡ Create full-stack automation solutions, like the optimization toolbox I'm making for Airbus"
    ),
    emoji(
      "⚡ Lead teams to success, such as winning 2nd place in the VDI Autonomous Driving Cup"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "ROS",
      iconUrl: require("./assets/images/ros.png")
    },
    {
      skillName: "Unity",
      iconUrl: require("./assets/images/unity.png")
    },
    {
      skillName: "Unreal Engine 5",
      iconUrl: require("./assets/images/ue.png")
    },
    {
      skillName: "Arduino",
      iconUrl: require("./assets/images/arduino.png")
    },
    {
      skillName: "MATLAB",
      iconUrl: require("./assets/images/matlab.png")
    },
    {
      skillName: "Python",
      iconUrl: require("./assets/images/python.png")
    },
    {
      skillName: "C#",
      iconUrl: require("./assets/images/csharp.png")
    },
    {
      skillName: "C++",
      iconUrl: require("./assets/images/c++.png")
    },
    {
      skillName: "SQL",
      iconUrl: require("./assets/images/sql.png")
    },
    {
      skillName: "Docker",
      iconUrl: require("./assets/images/docker.png")
    },
    {
      skillName: "Git",
      iconUrl: require("./assets/images/git.png")
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Duisburg-Essen",
      logo: require("./assets/images/dueLogo.jpg"),
      subHeader: "Master of Science in Mechatronics",
      duration: "October 2022 - October 2024",
      desc: "90% average and heavy investment in practical projects",
      // You can add second level bullet points here
      descBullets: [
        "Thesis (Ongoing | Airbus): Design Optimization of Carbon Fiber Laminates for Aerospace Applications",
        "Team leader in the VDI - Autonomous Driving Cup for scaled cars, winning second place",
        "Developed an autonomous plant-watering robot with an international team"
      ]
    },
    {
      schoolName: "University of Duisburg-Essen",
      logo: require("./assets/images/dueLogo.jpg"),
      subHeader: "Bachelor of Science in Mechanical Engineering",
      duration: "October 2019 - March 2022",
      desc: "Thesis (Grade: 100%): SLAM-Assisted Object Detection in Real and Simulated Environments",
      descBullets: [
        "The thesis won first place in the yearly contest hosted by the Mechatronics Alumni Group",
        "TurtleBot3-based project powered by ROS (Robot Operating System) and the robotics simulator Gazebo",
        "Developed an object detection algorithm powered by SLAM technology"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Robotics and Automation", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Project Management",
      progressPercentage: "80%"
    },
    {
      Stack: "Full-Stack Development",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Stuff that I've worked on and love to share :)",
  projects: [
    {
      image: require("./assets/images/adc_team.JPG"),
      projectName: "VDI-ADC",
      projectDesc:
        "Lead our team to 2nd place in the VDI Autonomous Driving Cup",
      footerLink: [
        {
          name: "Check it out!",
          url: "/developerFolio/projectExperience/VDI_ADC"
        }
        //  you can add extra buttons here.
      ],
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
          src: require("./assets/images/adc_car.png"),
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
          src: require("./assets/images/adc_team_full.png"),
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
    },
    {
      image: require("./assets/images/laila_thumbnail.png"),
      projectName: "LAiLA",
      projectDesc: "Full-stack optimization toolbox development for Airbus",
      footerLink: [
        {
          name: "Check it out!",
          url: "/developerFolio/projectExperience/LAiLA"
        }
        //  you can add extra buttons here.
      ],
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
    },
    {
      image: require("./assets/images/vera_thumbnail.png"),
      projectName: "VERA",
      projectDesc:
        "Sensor modules and serializer for a simulation environment in UE5",
      footerLink: [
        {
          name: "Check it out!",
          url: "/developerFolio/projectExperience/VERA"
        }
      ],
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
    },
    {
      image: require("./assets/images/autobin_thumbnail.png"),
      projectName: "AutoBin",
      projectDesc: "Ship telemetry and control communication protocol",
      footerLink: [
        {
          name: "Check it out!",
          url: "/developerFolio/projectExperience/AutoBin"
        }
        //  you can add extra buttons here.
      ],
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
    },
    {
      image: require("./assets/images/spot_the_pot_thumbnail.png"),
      projectName: "Spot the Pot",
      projectDesc: "Fully automated plant watering robot on a tight budget",
      footerLink: [
        {
          name: "Check it out!",
          url: "/developerFolio/projectExperience/SpotThePot"
        }
        //  you can add extra buttons here.
      ],
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
    },
    {
      image: require("./assets/images/turtlebot.png"),
      projectName: "SLAM-based Object Detection",
      projectDesc: "Where it all started: my first project in robotics",
      footerLink: [
        {
          name: "Check it out!",
          url: "/developerFolio/projectExperience/SLAM_ObjectDetection"
        }
        //  you can add extra buttons here.
      ],
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
    },
    {
      image: require("./assets/images/cobotank_thumbnail.png"),
      projectName: "CoboTank",
      projectDesc: "Inverse Kinematics implementation using ROS",
      footerLink: [
        {
          name: "Check it out!",
          url: "/developerFolio/projectExperience/CoboTank"
        }
        //  you can add extra buttons here.
      ],
      media: [
        {
          type: "text",
          src: "Another project where ther was much more work than there was documentation. Below are pictures of the robots that for which I helpeded impement inverse kinematicss using ROS.",
          width: "58.2%"
        },
        {
          type: "image",
          src: require("./assets/images/cobotank_1.png"),
          alt: "CoboTank",
          width: "40%",
          height: "auto"
        },
        {
          type: "image",
          src: require("./assets/images/cobotank_2.png"),
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
          src: require("./assets/images/cobotank_minister.png"),
          alt: "CoboTank",
          width: "40%",
          height: "auto"
        }
      ]
    }
  ],

  display: true // Set false to hide this section, defaults to true
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "MSc Research Intern",
      company: "Airbus",
      companylogo: require("./assets/images/airbus.png"),
      date: "Mai 2024 – Present",
      desc: "Design Optimization of Carbon Fiber Laminates for Aerospace Applications",
      descBullets: [
        "Developing a full-stack scalable optimization toolbox for VAT carbon fiber deposition",
        "Validating optimization results through simulation and hardware testing"
      ]
    },
    {
      role: "Research Assistant",
      company: "Chair of Mechatronics at UDE",
      companylogo: require("./assets/images/imech.png"),
      date: "May 2022 – May 2024",
      desc: "Contributions in robotics and automation to diverse reasearch-industry projects."
    },
    {
      role: "R&D Intern",
      company: "Emma, the Sleep Company",
      companylogo: require("./assets/images/emma_logo.png"),
      date: "Nov 2021 – April 2022",
      desc: "Developed a storage and archive system for foam and mattress samples and conducted research and development on heating and cooling technologies for smart mattresses."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "rachid.alhourani@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
