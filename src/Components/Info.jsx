import React from "react";
import "../Styles/Info.css";

const PersonalInfo = () => {
  return (
    <div className="home" id="home">
      <div className="home-container section">
        <div className="home-data">
          <h1 className="home-title">YOUR NAME</h1>
          <h3 className="home-profession">Web Developer</h3>
        </div>
        <div className="home-info">
          <h3 className="email">youremail@gmail.com</h3>
          <h3 className="phone">000-00-0000</h3>
          <h3 className="website">www.YourWebsiteOrSocialMedia.com</h3>
        </div>
      </div>
      <div className="profile" id="profile">
        <p className="profile-descript">
          I am a skilled front-end developer experienced in creating visually
          stunning and user-friendly websites and applications. I use UI/UX
          design principles to deliver high-quality products that meet client
          expectations.
        </p>
      </div>
    </div>
  );
};

export default PersonalInfo;
