import React, {useEffect, useRef} from "react";
import ScrollToTopButton from "../containers/topbutton/Top";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import Fade from "react-reveal/Fade";
import {bigProjects} from "../portfolio";
import "../containers/Main.scss";

const ProjectExperience = ({
  projectName,
  projectDetails,
  media,
  footerLink,
  setActiveProject,
  setNavigationProjects
}) => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const profileRef = useRef(null);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  const currentIndex = bigProjects.projects.findIndex(
    project => project.projectName === projectName
  );

  const previousProject =
    bigProjects.projects[
      (currentIndex - 1 + bigProjects.projects.length) %
        bigProjects.projects.length
    ];
  const nextProject =
    bigProjects.projects[(currentIndex + 1) % bigProjects.projects.length];

  useEffect(() => {
    setNavigationProjects({previousProject, nextProject});
  }, [previousProject, nextProject, setNavigationProjects]);

  return (
    <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
      <div className={isDark ? "dark-mode" : null}>
        <Fade bottom duration={2000} distance="40px">
          <div className="main project-experience-container" ref={profileRef}>
            <div
              id="projects"
              style={{
                position: "absolute",
                top: window.innerWidth <= 768 ? "-200px" : "-100px"
              }}
            ></div>
            <h2 className="sexy-project-name">{projectName}</h2>
            <p>{projectDetails}</p>
            <div className="media-container center-content">
              {media && media.length > 0 ? (
                media.map((item, index) => (
                  <Fade
                    key={index}
                    left={index % 2 === 0}
                    right={index % 2 !== 0}
                  >
                    {item.type === "text" ? (
                      <p
                        className="media-text project-text"
                        style={{
                          width: item.width,
                          marginBottom: "20px"
                        }}
                      >
                        {item.src}
                      </p>
                    ) : item.type === "image" ? (
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="media-image project-image"
                        style={{
                          width: item.width || "70%",
                          height: item.height || "auto",
                          marginBottom: "20px"
                        }}
                      />
                    ) : item.type === "video" ? (
                      <video
                        controls
                        className="media-video project-video"
                        style={{
                          width: item.width || "70%",
                          height: item.height || "auto",
                          marginBottom: "20px"
                        }}
                      >
                        <source src={item.src} type={item.format} />
                        Your browser does not support the video tag.
                      </video>
                    ) : item.type === "youtube" ? (
                      <iframe
                        className="media-video project-video"
                        width={item.width || "70%"}
                        height={item.height || "auto"}
                        src={item.src}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{marginBottom: "20px"}}
                      ></iframe>
                    ) : null}
                  </Fade>
                ))
              ) : (
                <p>No media available</p>
              )}
            </div>
          </div>
        </Fade>
        <ScrollToTopButton />
      </div>
    </StyleProvider>
  );
};

export default ProjectExperience;
