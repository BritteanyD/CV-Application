import React, { useState } from "react";
import Info from "./Components/Info";
import Skills from "./Components/Skills";
import Exp from "./Components/Experience";
import Edu from "./Components/Education";
import Form from "./Components/Form";
import "./Styles/app.css";

const App = () => {
  const initialResumeData = {
    name: "",
    profession: "",
    email: "",
    phone: "",
    web: "",
    summary: "",
    skill: "",
    experience: "",
    description: "",
    education: "",
  };

  const [resumeData, setResumeData] = useState(initialResumeData);

  const handleFormChange = (fieldName, value) => {
    setResumeData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  return (
    <main className=" main-container">
      <div className="form-container">
        <Form
          resumeData={resumeData}
          onFormChange={handleFormChange}
        />
      </div>
      <div className="resume">
        <Info resumeData={resumeData} />
        <Skills resumeData={resumeData} />
        <Exp resumeData={resumeData} />
        <Edu resumeData={resumeData} />
      </div>
    </main>
  );
};

export default App;
