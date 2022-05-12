import React, { useState } from "react";

const Education = ({
  editView,
  education: { educationList, newEducation },
  handleEducationChanges,
  handleEducationAdd,
  handleEducationClose,
  handleEducationDelete,
}) => {
  const [showForm, setShowForm] = useState(false);

  function triggerShowForm() {
    setShowForm((prevShowForm) => !prevShowForm);
  }

  function overviewEditEducation() {
    return (
      <ul>
        {educationList.map((education, index) => {
          return (
            <li key={index}>
              <p className="edit-education-school">{education.school}</p>
              <p className="edit-education-location">{education.location}</p>
              <p className="edit-education-major">{education.major}</p>
              <p className="edit-education-start">{education.start}</p>
              <p className="edit-education-end">{education.end}</p>
              <p className="edit-education-gpa">{education.gpa}</p>
              <button onClick={(e) => handleEducationDelete(index)}>❌</button>
            </li>
          );
        })}
      </ul>
    );
  }

  function previewViewEducation() {
    return (
      <section>
        <p>Education:</p>
        <ul>
          {educationList.map((education, index) => {
            return (
              <li key={index}>
                <p className="preview-education-school">{education.school}</p>
                <p className="preview-education-location">
                  {education.location}
                </p>
                <p className="preview-education-major">{education.major}</p>
                <p className="preview-education-start">{education.start}</p>
                <p className="preview-education-end">{education.end}</p>
                <p className="preview-education-gpa">{education.gpa}</p>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
  function editViewEducation() {
    const { school, location, major, start, end, gpa } = newEducation;

    return (
      <section>
        {!showForm && <button onClick={triggerShowForm}>Add Education</button>}
        {showForm && (
          <form
            onSubmit={(e) => {
              handleEducationAdd(e);
              triggerShowForm();
            }}
          >
            <label>
              School:
              <input
                type="text"
                name="school"
                value={school}
                onChange={handleEducationChanges}
              ></input>
            </label>
            <label>
              Location:
              <input
                type="text"
                name="location"
                value={location}
                onChange={handleEducationChanges}
              ></input>
            </label>
            <label>
              Major/Concentration:
              <input
                type="text"
                name="major"
                value={major}
                onChange={handleEducationChanges}
              ></input>
            </label>
            <label>
              Start Year:
              <input
                type="text"
                name="start"
                value={start}
                onChange={handleEducationChanges}
              ></input>
            </label>
            <label>
              End Year:
              <input
                type="text"
                name="end"
                value={end}
                onChange={handleEducationChanges}
              ></input>
            </label>
            <label>
              GPA:
              <input
                type="text"
                name="gpa"
                value={gpa}
                onChange={handleEducationChanges}
              ></input>
            </label>
            <button
              name="close"
              onClick={(e) => {
                handleEducationClose(e);
                triggerShowForm();
              }}
            >
              Close
            </button>
            <button type="submit" name="add">
              Add
            </button>
          </form>
        )}
        <div>{overviewEditEducation()}</div>
      </section>
    );
  }

  return (
    <div>
      {editView && editViewEducation()}
      {!editView && previewViewEducation()}
    </div>
  );
};

export default Education;
