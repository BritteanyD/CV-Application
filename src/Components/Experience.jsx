import React from "react";
import "../Styles/Experience.css";

const Exp = ({resumeData}) => {
  return (
    <div className="exp-section" id="exp">
      <h2 className="section-title">Experience</h2>
      <div className="exp-container section">
        <div className="exp-content">
              <h3 className="exp-title">
                {resumeData.experience}
              </h3>
              <p className="exp-descript">{resumeData.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Exp;
