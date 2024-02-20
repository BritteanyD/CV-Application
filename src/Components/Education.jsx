import React from "react";
import "../Styles/Education.css";

const PersonalEdu = () => {
  return (
    <div className="education" id="education">
      <h2 className="section-title">Education</h2>
      <div className="education-container bd-grid">
        <div className="education-content">
            <div className="education-time">
                <span className="education-rounder"></span>
            </div>
            <div className="education-data bd-grid">
                <h3 className="education-title">MASTERS OF EVERYTHING</h3>
                <span className="education-studies">University of Everything</span>
                <span className="education-year">2020-2030</span>
            </div>
        </div>
        <div className="education-content">
            <div className="education-time">
                <span className="education-rounder"></span>
            </div>
            <div className="education-data bd-grid">
                <h3 className="education-title">MASTERS OF EVERYTHING</h3>
                <span className="education-studies">University of Everything</span>
                <span className="education-year">2020-2030</span>
            </div>
        </div>
        <div className="education-content">
            <div className="education-time">
                <span className="education-rounder"></span>
            </div>
            <div className="education-data bd-grid">
                <h3 className="education-title">MASTERS OF EVERYTHING</h3>
                <span className="education-studies">University of Everything</span>
                <span className="education-year">2020-2030</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalEdu;