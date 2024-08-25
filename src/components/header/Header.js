import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection,
  resumeSection,
  bigProjects
} from "../../portfolio";

function Header({ setActiveProject }) { // Add setActiveProject as a prop
  const {isDark} = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewProjects = bigProjects.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  const viewResume = resumeSection.display;

const handleProjectsClick = () => {
  setActiveProject(null); // Clear the current active project
  document.getElementById("menu-btn").checked = false; // Close the mobile menu
  window.location.href = "/#projects"; // Scroll to the Projects section
};

const handleLinkClick = () => {
  document.getElementById("menu-btn").checked = false; // Close the mobile menu
};

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="/#skills" onClick={handleLinkClick}>Skills </a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="/#projects" onClick={handleProjectsClick}>
                Projects
              </a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="/#experience" onClick={handleLinkClick}>Work Experiences</a>
            </li>
          )}
          {viewProjects && (
            <li>
              <a href="/#projects" onClick={handleProjectsClick}>
                Projects
              </a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="/#opensource" onClick={handleLinkClick}>Open Source</a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="/#blogs" onClick={handleLinkClick}>Blogs</a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href="/#talks" onClick={handleLinkClick}>Talks</a>
            </li>
          )}
          {viewResume && (
            <li>
              <a href="/#resume" onClick={handleLinkClick}>Resume</a>
            </li>
          )}
          <li>
            <a href="/#contact" onClick={handleLinkClick}>Contact Me</a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}

export default Header;
