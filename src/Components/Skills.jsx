import React from "react";
import "../Styles/Skills.css";

const Skills = ({ resumeData }) => {
  return (
    <div className="skills-section" id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-content">
        <h3 className="skills-data">{resumeData.skill}</h3>
      </div>
    </div>
  );
};

export default Skills;
