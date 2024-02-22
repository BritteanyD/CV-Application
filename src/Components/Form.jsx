import React from "react";
import "../Styles/Form.css";

const Form = ({ resumeData, onFormChange}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFormChange(name, value);
  };

  return (
    <div className="form">
      <h1 className="form-title">Edit Resume</h1>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="John Smith"
          value={resumeData.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="profession">Profession:</label>
        <input
          type="text"
          id="profession"
          name="profession"
          placeholder="Web Developer"
          value={resumeData.profession}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="John.Smith@gmail.com"
          value={resumeData.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone Number:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="222-222-2222"
          value={resumeData.phone}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="Link">Web Link:</label>
        <input
          type="url"
          id="web"
          name="web"
          placeholder="www.MyLink.com"
          value={resumeData.web}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="summary">Summary:</label>
        <input
          type="text"
          id="summary"
          name="summary"
          placeholder="I am a skilled front-end dev..."
          value={resumeData.summary}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="skill">Skill:</label>
        <textarea
          type="text"
          id="skill"
          name="skill"
          placeholder="HTML, CSS, JavaScript"
          value={resumeData.skill}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="experience">Experience Info:</label>
        <textarea
          type="text"
          id="experience"
          name="experience"
          placeholder="Junior Dev at Disney from 2010-2013"
          value={resumeData.experience}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Experience Description:</label>
        <textarea
          type="text"
          id="description"
          name="description"
          placeholder="I utilized and solved..."
          value={resumeData.description}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="education">Education Info:</label>
        <textarea
          type="text"
          id="education"
          name="education"
          placeholder="Master Degree from University of Everything 2020-2030"
          value={resumeData.education}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Form;
