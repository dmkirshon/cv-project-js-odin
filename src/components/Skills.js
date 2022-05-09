import React, { Component } from "react";

class Skills extends Component {
  constructor(props) {
    super(props);

    this.overviewEditSkills = this.overviewEditSkills.bind(this);
  }

  overviewEditSkills() {
    const { skillList } = this.props.skills;
    return (
      <ul>
        {skillList.map((skill, index) => {
          return (
            <li key={index}>
              {skill}
              <button onClick={(e) => this.props.handleSkillDelete(index)}>
                ❌
              </button>
            </li>
          );
        })}
      </ul>
    );
  }

  previewViewSkills() {
    const { skillList } = this.props.skills;
    return (
      <section>
        <p>Skills:</p>
        <ul>
          {skillList.map((skill, index) => {
            return <li key={index}>{skill}</li>;
          })}
        </ul>
      </section>
    );
  }

  editViewSkills() {
    const { skills, handleSkillChanges, handleSkillAdd } = this.props;
    return (
      <section>
        <form name="addSkill">
          <label>
            New Skill:
            <input
              type="text"
              value={skills.newSkill}
              onChange={handleSkillChanges}
            ></input>
          </label>
          <button type="submit" onClick={handleSkillAdd}>
            Add
          </button>
        </form>
        <div>{this.overviewEditSkills()}</div>
      </section>
    );
  }

  render() {
    const { editView } = this.props;
    return (
      <div>
        {editView && this.editViewSkills()}
        {!editView && this.previewViewSkills()}
      </div>
    );
  }
}

export default Skills;
