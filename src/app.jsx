import React from "react";
import PersonalInfo from "./Components/Info";
import PersonalSkills from "./Components/Skills";
import PersonalExp from "./Components/Experience";
import PersonalEdu from "./Components/Education";

const App = () => {
  return (
    <main className="1-main bd-container">
      <div className="resume">
        <PersonalInfo />
        <PersonalSkills />
        <PersonalExp />
        <PersonalEdu />
      </div>
    </main>
  );
};

export default App;
