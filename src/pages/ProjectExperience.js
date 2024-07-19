// src/pages/ProjectExperience.js

import React, {useEffect, useRef} from "react"; // Import useEffect and useRef
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Profile from "../containers/profile/Profile";
import ScrollToTopButton from "../containers/topbutton/Top";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import Fade from "react-reveal/Fade"; // Import Fade
import {useNavigate} from "react-router-dom";
import {projects} from "../App"; // Import projects
import "../containers/Main.scss";

const ProjectExperience = ({
  projectName,
  projectDetails,
  media,
  footerLink
}) => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const profileRef = useRef(null); // Create a ref for Profile
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectName]); // Add projectName as a dependency

  useEffect(() => {
    const handleScroll = () => {
      const buttons = document.querySelectorAll(
        ".previous-project-button, .next-project-button"
      );
      const stopPosition = 100; // distance from the bottom of the page in pixels
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY || window.pageYOffset;
      const bottomReached =
        documentHeight - windowHeight - scrollPosition <= stopPosition;

      buttons.forEach(button => {
        button.style.visibility = bottomReached ? "hidden" : "visible";
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("load", handleScroll); // Ensure buttons are hidden on load if needed

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("load", handleScroll);
    };
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  const currentIndex = projects.findIndex(
    project => project.projectName === projectName
  );
  const previousProject =
    projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        <Header />
        <div className="project-content">
          <h1 className="sexy-project-title">{projectName}</h1>
          <p>{projectDetails}</p>
          <div className="media-container center-content">
            {media.map((item, index) => (
              <Fade key={index} left={index % 2 === 0} right={index % 2 !== 0}>
                {" "}
                {/* Apply Fade effect */}
                {item.type === "text" ? (
                  <p
                    className="project-text"
                    style={{width: item.width, marginBottom: "20px"}}
                  >
                    {item.src}
                  </p>
                ) : item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="project-image"
                    style={{
                      width: item.width,
                      height: item.height,
                      marginBottom: "20px"
                    }}
                  />
                ) : item.type === "video" ? (
                  <video
                    controls
                    className="project-video"
                    style={{
                      width: item.width,
                      height: item.height,
                      marginBottom: "20px"
                    }}
                  >
                    <source src={item.src} type={item.format} />
                    Your browser does not support the video tag.
                  </video>
                ) : item.type === "youtube" ? (
                  <iframe
                    className="project-video"
                    width={item.width || "560"}
                    height={item.height || "315"}
                    src={item.src}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{marginBottom: "20px"}}
                  ></iframe>
                ) : null}
              </Fade>
            ))}
          </div>
          <button
            className="previous-project-button"
            onClick={() => navigate(previousProject.path)}
          >
            Previous Project
          </button>
          <button
            className="next-project-button"
            onClick={() => navigate(nextProject.path)}
          >
            Next Project
          </button>
        </div>
        <Profile ref={profileRef} /> {/* Add ref to Profile component */}
        <Footer footerLink={footerLink} />
        <ScrollToTopButton />
      </StyleProvider>
    </div>
  );
};

export default ProjectExperience;
