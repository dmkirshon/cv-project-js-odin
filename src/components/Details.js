import React, { Component } from "react";

class Details extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { editView, details, handleDetailsChanges } = this.props;
    return (
      <div>
        <form>
          <label>
            Name:
            <input
              type="text"
              name="name"
              onChange={handleDetailsChanges}
              value={details.name}
            ></input>
          </label>
          <label>
            Phone:
            <input
              type="tel"
              name="phone"
              onChange={handleDetailsChanges}
              value={details.phone}
            ></input>
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              onChange={handleDetailsChanges}
              value={details.email}
            ></input>
          </label>
          <label>
            Website:
            <input
              type="text"
              name="website"
              onChange={handleDetailsChanges}
              value={details.website}
            ></input>
          </label>
        </form>
      </div>
    );
  }
}

export default Details;
