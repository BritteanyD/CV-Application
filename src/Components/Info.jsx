import React from "react";
import "../Styles/Info.css";

const Info = ({resumeData}) => {
  
  return (
    <div className="home" id="home">
      <div className="home-container section">
        <div className="home-data">
          <h1 className="home-title">{resumeData.name}</h1>
          <h3 className="home-profession">{resumeData.profession}</h3>
        </div>
        <div className="home-info">
          <h3 className="email">{resumeData.email}</h3>
          <h3 className="phone">{resumeData.phone}</h3>
          <h3 className="website">{resumeData.web}</h3>
        </div>
      </div>
      <div className="profile" id="profile">
        <p className="profile-descript">{resumeData.summary}</p>
      </div>
    </div>
  );
};

export default Info;
