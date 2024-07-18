// src/pages/ProjectExperience.js

import React from 'react';
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Profile from '../containers/profile/Profile';
import ScrollToTopButton from "../containers/topbutton/Top";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import "../containers/Main.scss";

const ProjectExperience = ({ projectName, projectDetails, media, footerLink }) => {
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
          <h1 className="sexy-project-title">{projectName}</h1>
          <p>{projectDetails}</p>
          <div className="media-container center-content">
            {media.map((item, index) => {
              if (item.type === 'text') {
                return <p key={index} className="project-text" style={{ marginBottom: '20px' }}>{item.src}</p>;
              } else if (item.type === 'image') {
                return <img key={index} src={item.src} alt={item.alt} className="project-image" style={{ width: item.width, height: item.height, marginBottom: '20px' }} />;
              } else if (item.type === 'video') {
                return (
                  <video key={index} controls className="project-video" style={{ width: item.width, height: item.height, marginBottom: '20px' }}>
                    <source src={item.src} type={item.format} />
                    Your browser does not support the video tag.
                  </video>
                );
              } else if (item.type === 'youtube') { // Handle YouTube videos
                return (
                  <iframe
                    key={index}
                    className="project-video"
                    width={item.width || "560"}
                    height={item.height || "315"}
                    src={item.src}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ marginBottom: '20px' }}
                  ></iframe>
                );
              }
              return null;
            })}
          </div>
        </div>
        <Profile />
        <Footer footerLink={footerLink} />
        <ScrollToTopButton />
      </StyleProvider>
    </div>
  );
};

export default ProjectExperience;
