import React, { Component } from "react";

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showForm: false,
    };

    this.triggerShowForm = this.triggerShowForm.bind(this);

    this.editViewEducation = this.editViewEducation.bind(this);
    this.previewViewEducation = this.previewViewEducation.bind(this);
  }

  triggerShowForm() {
    this.setState({
      showForm: !this.state.showForm,
    });
  }

  overviewEditEducation() {
    const { educationList } = this.props.education;
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
              <button onClick={(e) => this.props.handleEducationDelete(index)}>
                ❌
              </button>
            </li>
          );
        })}
      </ul>
    );
  }

  previewViewEducation() {
    const { educationList } = this.props.education;
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
  editViewEducation() {
    const { school, location, major, start, end, gpa } =
      this.props.education.newEducation;

    return (
      <section>
        {!this.state.showForm && (
          <button onClick={this.triggerShowForm}>Add Education</button>
        )}
        {this.state.showForm && (
          <form
            onSubmit={(e) => {
              this.props.handleEducationAdd(e);
              this.triggerShowForm();
            }}
          >
            <label>
              School:
              <input
                type="text"
                name="school"
                value={school}
                onChange={this.props.handleEducationChanges}
              ></input>
            </label>
            <label>
              Location:
              <input
                type="text"
                name="location"
                value={location}
                onChange={this.props.handleEducationChanges}
              ></input>
            </label>
            <label>
              Major/Concentration:
              <input
                type="text"
                name="major"
                value={major}
                onChange={this.props.handleEducationChanges}
              ></input>
            </label>
            <label>
              Start Year:
              <input
                type="text"
                name="start"
                value={start}
                onChange={this.props.handleEducationChanges}
              ></input>
            </label>
            <label>
              End Year:
              <input
                type="text"
                name="end"
                value={end}
                onChange={this.props.handleEducationChanges}
              ></input>
            </label>
            <label>
              GPA:
              <input
                type="text"
                name="gpa"
                value={gpa}
                onChange={this.props.handleEducationChanges}
              ></input>
            </label>
            <button
              name="close"
              onClick={(e) => {
                this.props.handleEducationClose(e);
                this.triggerShowForm();
              }}
            >
              Close
            </button>
            <button type="submit" name="add">
              Add
            </button>
          </form>
        )}
        <div>{this.overviewEditEducation()}</div>
      </section>
    );
  }

  render() {
    const { editView } = this.props;
    return (
      <div>
        {editView && this.editViewEducation()}
        {!editView && this.previewViewEducation()}
      </div>
    );
  }
}

export default Education;
