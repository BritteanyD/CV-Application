import React from "react";
import "../Styles/Education.css";

const Edu = ({resumeData}) => {
  return (
    <div className="education" id="education">
      <h2 className="section-title">Education</h2>
      <div className="education-container">
        <div className="education-content">
            <h3 className="education-title">{resumeData.education}</h3>
        </div>
      </div>
    </div>
  );
};

export default Edu;
