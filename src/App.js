import React, { Component } from "react";
import Details from "./components/Details";
import Skills from "./components/Skills";
import Education from "./components/Education";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: true,
      details: {
        name: "",
        phone: "",
        email: "",
        website: "",
      },
      skills: {
        skillList: [],
        newSkill: "",
      },
      education: {
        educationList: [],
        newEducation: {
          school: "",
          location: "",
          major: "",
          start: "",
          end: "",
          gpa: "",
        },
      },
    };

    this.handleDetailsChanges = this.handleDetailsChanges.bind(this);

    this.handleSkillChanges = this.handleSkillChanges.bind(this);
    this.handleSkillAdd = this.handleSkillAdd.bind(this);
    this.handleSkillDelete = this.handleSkillDelete.bind(this);

    this.handleEducationChanges = this.handleEducationChanges.bind(this);
    this.handleEducationAdd = this.handleEducationAdd.bind(this);
    this.handleEducationClose = this.handleEducationClose.bind(this);
    this.handleEducationDelete = this.handleEducationDelete.bind(this);

    this.handleViewChange = this.handleViewChange.bind(this);
  }

  handleDetailsChanges(event) {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      details: { ...prevState.details, [name]: value },
    }));
    event.target.reportValidity();
  }

  handleSkillChanges(event) {
    this.setState((prevState) => ({
      skills: {
        skillList: [...prevState.skills.skillList],
        newSkill: event.target.value,
      },
    }));
  }

  handleSkillAdd(event) {
    this.setState((prevState) => ({
      skills: {
        skillList: [...prevState.skills.skillList, prevState.skills.newSkill],
        newSkill: "",
      },
    }));
    event.preventDefault();
  }

  handleSkillDelete(indexChoice) {
    this.setState((prevState) => ({
      skills: {
        skillList: prevState.skills.skillList.filter(
          (skill, index) => index !== indexChoice
        ),
        newSkill: prevState.skills.newSkill,
      },
    }));
  }

  handleEducationChanges(event) {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      education: {
        ...prevState.education,
        newEducation: {
          ...prevState.education.newEducation,
          [name]: value,
        },
      },
    }));
  }

  handleEducationAdd(event) {
    this.setState((prevState) => ({
      education: {
        educationList: [
          ...prevState.education.educationList,
          prevState.education.newEducation,
        ],
        newEducation: {
          school: "",
          location: "",
          major: "",
          start: "",
          end: "",
          gpa: "",
        },
      },
    }));
    event.preventDefault();
  }

  handleEducationClose(event) {
    this.setState((prevState) => ({
      education: {
        ...prevState.education,
        newEducation: {
          school: "",
          location: "",
          major: "",
          start: "",
          end: "",
          gpa: "",
        },
      },
    }));
    event.preventDefault();
  }

  handleEducationDelete(indexChoice) {
    this.setState((prevState) => ({
      education: {
        ...prevState.education,
        educationList: prevState.education.educationList.filter(
          (education, index) => index !== indexChoice
        ),
      },
    }));
  }

  handleViewChange(event) {
    this.setState((prevState) => ({
      edit: !prevState.edit,
    }));
  }

  render() {
    return (
      <div>
        {!this.state.edit && (
          <button className="edit view-button" onClick={this.handleViewChange}>
            Change to Edit
          </button>
        )}
        {this.state.edit && (
          <button
            className="preview view-button"
            onClick={this.handleViewChange}
          >
            Change to Preview
          </button>
        )}
        <Details
          editView={this.state.edit}
          details={this.state.details}
          handleDetailsChanges={this.handleDetailsChanges}
        />
        <Skills
          editView={this.state.edit}
          skills={this.state.skills}
          handleSkillChanges={this.handleSkillChanges}
          handleSkillAdd={this.handleSkillAdd}
          handleSkillDelete={this.handleSkillDelete}
        />
        <Education
          editView={this.state.edit}
          education={this.state.education}
          handleEducationChanges={this.handleEducationChanges}
          handleEducationAdd={this.handleEducationAdd}
          handleEducationClose={this.handleEducationClose}
          handleEducationDelete={this.handleEducationDelete}
        />
      </div>
    );
  }
}

export default App;
