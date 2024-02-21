import React, { useState } from "react";
import Info from "./Components/Info";
import PersonalSkills from "./Components/Skills";
import PersonalExp from "./Components/Experience";
import PersonalEdu from "./Components/Education";
import Form from "./Components/Form";
import "./Styles/app.css";

const App = () => {
  const initialResumeData = {
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

  const [name, setName] = useState('Taylor');

  const [resumeData, setResumeData] = useState(initialResumeData);
  const [isEditing, setIsEditing] = useState(false);

  const handleFormChange = (fieldName, value) => {
    setResumeData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <main className=" main-container">
      <div className="form-container">
        <Form
          resumeData={resumeData}
          onFormChange={handleFormChange}
          isEditing={isEditing}
          onEdit={handleEdit}
          onSave={handleSave}
          setName={setName}
          name={name}
        />
      </div>
      <div className="resume">
        <Info resumeData={resumeData} name={name}/>
        <PersonalSkills resumeData={resumeData} />
        <PersonalExp resumeData={resumeData} />
        <PersonalEdu resumeData={resumeData} />
      </div>
    </main>
  );
};

export default App;
