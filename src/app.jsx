import React from "react";
import PersonalInfo from "./Components/Info";
import PersonalSkills from "./Components/Skills";
import PersonalExp from "./Components/Experience";
import PersonalEdu from "./Components/Education";
import PersonalForm from "./Components/Form";
import "./Styles/app.css";

const App = () => {
  return (
    <main className=" main-container">
      <div className="form-container">
        <PersonalForm />
      </div>
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
