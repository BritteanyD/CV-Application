import React from "react";
import "../Styles/Experience.css";

const PersonalExp = () => {
  return (
    <div className="exp-section" id="exp">
      <h2 className="section-title">Experience</h2>
      <div className="exp-container section">
        <div className="exp-content">
          <ul className="exp-data">
            <li>
              <h3 className="exp-title">
                Mickey Mouse at Disney from 2010-2013
              </h3>
              <p className="exp-descript">I did many things very often</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PersonalExp;
