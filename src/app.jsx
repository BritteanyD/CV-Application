import React, {useState} from "react";
import PersonalInfo from "./Components/Info";
import PersonalSkills from "./Components/Skills";
import PersonalExp from "./Components/Experience";
import PersonalEdu from "./Components/Education";
import PersonalForm from "./Components/Form";
import "./Styles/app.css";

const App = () => {
  const[resumeData, setResumeData] = useState({
    name:"",
    profession: "",
    email:"",
    phone: "",
    web: "",
    summary: "",
    skill: "",
    experience: "",
    description: "",
    education: ""
  });

  const handleFormChange = (fieldName, value) => {
    setResumeData(prevData => ({
      ...prevData,
      [fieldName]: value
    }));
  }

  return (
    <main className=" main-container">
      <div className="form-container">
        <PersonalForm resumeData={resumeData} onFormChange={handleFormChange}/>
      </div>
      <div className="resume">
        <PersonalInfo resumeData={resumeData} />
        <PersonalSkills resumeData={resumeData} />
        <PersonalExp resumeData={resumeData} />
        <PersonalEdu resumeData={resumeData} />
      </div>
    </main>
  );
};

export default App;
