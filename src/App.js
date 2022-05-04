import React, { Component } from "react";
import Details from "./components/Details";

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
    };

    this.handleDetailsChanges = this.handleDetailsChanges.bind(this);
    this.handleViewChange = this.handleViewChange.bind(this);
  }

  handleDetailsChanges(event) {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      details: { ...prevState.details, [name]: value },
    }));
    event.target.reportValidity();
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
      </div>
    );
  }
}

export default App;
