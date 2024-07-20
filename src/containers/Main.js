import React, {useEffect, useState} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";
import Blogs from "./blogs/Blogs";
import Footer from "../components/footer/Footer";
import Talks from "./talks/Talks";
import Podcast from "./podcast/Podcast";
import Education from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";
import Twitter from "./twitter-embed/twitter";
import Profile from "./profile/Profile";
import SplashScreen from "./splashScreen/SplashScreen";
import {splashScreen} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import ProjectExperience from "../pages/ProjectExperience";
import "./Main.scss";

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);
  const [activeProject, setActiveProject] = useState(null);
  const [showButtons, setShowButtons] = useState(false);
  const [navigationProjects, setNavigationProjects] = useState({
    previousProject: null,
    nextProject: null
  });

  useEffect(() => {
    if (localStorage.getItem("splashShown") !== "true") {
      if (splashScreen.enabled) {
        const splashTimer = setTimeout(() => {
          setIsShowingSplashAnimation(false);
          localStorage.setItem("splashShown", "true");
        }, splashScreen.duration);
        return () => {
          clearTimeout(splashTimer);
        };
      }
    } else {
      setIsShowingSplashAnimation(false);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || window.pageYOffset;
      const yStart = 3540; // Adjust this value as needed
      const yEnd = 10000; // Adjust this value as needed

      if (scrollPosition > yStart && scrollPosition < yEnd) {
        setShowButtons(true);
      } else {
        setShowButtons(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("load", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("load", handleScroll);
    };
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <>
            <Header />
            <Greeting />
            <Skills />
            <StackProgress />
            <Education />
            <WorkExperience />
            <Projects setActiveProject={setActiveProject} />
            {activeProject ? (
              <div className="project-tab">
                <ProjectExperience
                  projectName={activeProject.projectName}
                  projectDetails={activeProject.projectDetails}
                  media={activeProject.media}
                  footerLink={activeProject.footerLink}
                  setActiveProject={setActiveProject} // Pass setActiveProject here
                  setNavigationProjects={setNavigationProjects} // Pass setNavigationProjects here
                />
              </div>
            ) : (
              <StartupProject setActiveProject={setActiveProject} />
            )}
            {showButtons && activeProject && (
              <div className="project-navigation-buttons">
                <button
                  className="previous-project-button"
                  onClick={() => {
                    window.scrollTo({
                      top: window.scrollY - 100,
                      behavior: "smooth"
                    });
                    setActiveProject(navigationProjects.previousProject);
                  }}
                >
                  Previous Project
                </button>
                <button
                  className="next-project-button"
                  onClick={() => {
                    window.scrollTo({
                      top: window.scrollY - 100,
                      behavior: "smooth"
                    });
                    setActiveProject(navigationProjects.nextProject);
                  }}
                >
                  Next Project
                </button>
              </div>
            )}
            <Achievement />
            <Blogs />
            <Talks />
            <Twitter />
            <Podcast />
            <Profile />
            <Footer />
            <ScrollToTopButton />
          </>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;
