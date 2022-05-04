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
  }

  handleDetailsChanges(event) {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      details: { ...prevState.details, [name]: value },
    }));
    event.target.reportValidity();
  }

  render() {
    return (
      <div>
        <button className="edit view-button">Edit</button>
        <button className="preview view-button">Preview</button>
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
