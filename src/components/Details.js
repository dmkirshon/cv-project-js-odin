import React, { Component } from "react";

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      phone: "",
      email: "",
      website: "",
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleWebsiteChange = this.handleWebsiteChange.bind(this);
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value,
    });
  }
  handlePhoneChange(event) {
    this.setState({
      phone: event.target.value,
    });
  }
  handleEmailChange(event) {
    this.setState({
      email: event.target.value,
    });
    event.target.reportValidity();
  }
  handleWebsiteChange(event) {
    this.setState({
      website: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <form>
          <label>
            Name:
            <input type="text" onChange={this.handleNameChange}></input>
          </label>
          <label>
            Phone:
            <input type="tel" onChange={this.handlePhoneChange}></input>
          </label>
          <label>
            Email:
            <input type="email" onChange={this.handleEmailChange}></input>
          </label>
          <label>
            Website:
            <input type="text" onChange={this.handleWebsiteChange}></input>
          </label>
        </form>
      </div>
    );
  }
}

export default Details;
