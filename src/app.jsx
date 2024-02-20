import React from "react";
import PersonalInfo from "./Components/Info";
import PersonalEdu from "./Components/Education";

const App = () => {
  return (
    <main className="1-main bd-container">
      <div className="resume">
        <PersonalInfo />
        <PersonalEdu />
      </div>
    </main>
  );
};

export default App;
