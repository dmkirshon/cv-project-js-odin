import React, { Component } from "react";
import Details from "./components/Details";
import Skills from "./components/Skills";

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
    };

    this.handleDetailsChanges = this.handleDetailsChanges.bind(this);
    this.handleSkillChanges = this.handleSkillChanges.bind(this);
    this.handleSkillAdd = this.handleSkillAdd.bind(this);
    this.handleSkillDelete = this.handleSkillDelete.bind(this);
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
          skills={this.state.skills}
          handleSkillChanges={this.handleSkillChanges}
          handleSkillAdd={this.handleSkillAdd}
          handleSkillDelete={this.handleSkillDelete}
        />
      </div>
    );
  }
}

export default App;
