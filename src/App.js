import React, { useState } from "react";
import Details from "./components/Details";
import Skills from "./components/Skills";
import Education from "./components/Education";

const App = (props) => {
  const [details, setDetails] = useState({
    name: "",
    phone: "",
    email: "",
    website: "",
  });

  function handleDetailsChanges(event) {
    const { name, value } = event.target;
    setDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
    event.target.reportValidity();
  }

  const [skills, setSkills] = useState({ skillList: [], newSkill: "" });

  function handleSkillChanges(event) {
    setSkills((prevSkills) => ({
      ...prevSkills,
      newSkill: event.target.value,
    }));
  }

  function handleSkillAdd(event) {
    setSkills((prevSkills) => ({
      skillList: [...prevSkills.skillList, prevSkills.newSkill],
      newSkill: "",
    }));
    event.preventDefault();
  }

  function handleSkillDelete(indexChoice) {
    setSkills((prevSkills) => ({
      ...prevSkills,
      skillList: prevSkills.skillList.filter(
        (skill, index) => index !== indexChoice
      ),
    }));
  }

  const [education, setEducation] = useState({
    educationList: [],
    newEducation: {
      school: "",
      location: "",
      major: "",
      start: "",
      end: "",
      gpa: "",
    },
  });

  function handleEducationChanges(event) {
    const { name, value } = event.target;
    setEducation((prevEducation) => ({
      ...prevEducation,
      newEducation: {
        ...prevEducation.newEducation,
        [name]: value,
      },
    }));
  }

  function handleEducationAdd(event) {
    setEducation((prevEducation) => ({
      educationList: [
        ...prevEducation.educationList,
        prevEducation.newEducation,
      ],
      newEducation: {
        school: "",
        location: "",
        major: "",
        start: "",
        end: "",
        gpa: "",
      },
    }));
    event.preventDefault();
  }

  function handleEducationClose(event) {
    setEducation((prevEducation) => ({
      ...prevEducation,
      newEducation: {
        school: "",
        location: "",
        major: "",
        start: "",
        end: "",
        gpa: "",
      },
    }));
    event.preventDefault();
  }

  function handleEducationDelete(indexChoice) {
    setEducation((prevEducation) => ({
      ...prevEducation,
      educationList: prevEducation.educationList.filter(
        (education, index) => index !== indexChoice
      ),
    }));
  }

  const [edit, setEdit] = useState(true);

  function handleViewChange(event) {
    setEdit((prevEdit) => !prevEdit);
  }

  return (
    <div>
      {!edit && (
        <button className="edit view-button" onClick={handleViewChange}>
          Change to Edit
        </button>
      )}
      {edit && (
        <button className="preview view-button" onClick={handleViewChange}>
          Change to Preview
        </button>
      )}
      <Details
        editView={edit}
        details={details}
        handleDetailsChanges={handleDetailsChanges}
      />
      <Skills
        editView={edit}
        skills={skills}
        handleSkillChanges={handleSkillChanges}
        handleSkillAdd={handleSkillAdd}
        handleSkillDelete={handleSkillDelete}
      />
      <Education
        editView={edit}
        education={education}
        handleEducationChanges={handleEducationChanges}
        handleEducationAdd={handleEducationAdd}
        handleEducationClose={handleEducationClose}
        handleEducationDelete={handleEducationDelete}
      />
    </div>
  );
};

export default App;
