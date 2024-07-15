// src/pages/ProjectExperience.js
import React from 'react';
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ScrollToTopButton from "../containers/topbutton/Top";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import "../containers/Main.scss";

const ProjectExperience = ({ projectName, projectDetails, media }) => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        <Header />
        <div className="project-content">
          <h1>{projectName}</h1>
          <p>{projectDetails}</p>
          <div className="media-container">
            {media.map((item, index) => {
              if (item.type === 'image') {
                return <img key={index} src={item.src} alt={item.alt} className="project-image" />;
              } else if (item.type === 'video') {
                return (
                  <video key={index} controls className="project-video">
                    <source src={item.src} type={item.format} />
                    Your browser does not support the video tag.
                  </video>
                );
              }
              return null;
            })}
          </div>
        </div>
        <Footer />
        <ScrollToTopButton />
      </StyleProvider>
    </div>
  );
};

export default ProjectExperience;
