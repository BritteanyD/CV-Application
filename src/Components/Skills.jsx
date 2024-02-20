import React from "react";
import "../Styles/Skills.css";

const PersonalSkills = () => {
  return (
    <div className="skills-section" id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-content">
        <ul className="skills-data">
          <li className="skills-name">
            <span className="skills-cirlce"></span>Html
          </li>
        </ul>
        <ul className="skills-data">
          <li className="skills-name">
            <span className="skills-cirlce"></span>React
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PersonalSkills;
