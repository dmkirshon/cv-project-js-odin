import React from "react";

const Skills = ({
  editView,
  skills: { skillList, newSkill },
  handleSkillAdd,
  handleSkillChanges,
  handleSkillDelete,
}) => {
  function overviewEditSkills() {
    return (
      <ul>
        {skillList.map((skill, index) => {
          return (
            <li key={index}>
              {skill}
              <button onClick={(e) => handleSkillDelete(index)}>❌</button>
            </li>
          );
        })}
      </ul>
    );
  }

  function previewViewSkills() {
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

  function editViewSkills() {
    return (
      <section>
        <form name="addSkill">
          <label>
            New Skill:
            <input
              type="text"
              value={newSkill}
              onChange={handleSkillChanges}
            ></input>
          </label>
          <button type="submit" onClick={handleSkillAdd}>
            Add
          </button>
        </form>
        <div>{overviewEditSkills()}</div>
      </section>
    );
  }

  return (
    <div>
      {editView && editViewSkills()}
      {!editView && previewViewSkills()}
    </div>
  );
};

export default Skills;
