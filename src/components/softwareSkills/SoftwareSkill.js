import React, {createRef} from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  const imgRef = createRef();

  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                <img
                  crossOrigin={"anonymous"}
                  ref={imgRef}
                  src={skills.iconUrl}
                  alt=""
                  className="custom-icon"
                />
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
