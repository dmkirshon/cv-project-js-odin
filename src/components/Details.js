import React, { Component } from "react";

class Details extends Component {
  constructor(props) {
    super(props);

    this.editViewDetails = this.editViewDetails.bind(this);
    this.previewViewDetails = this.previewViewDetails.bind(this);
  }

  previewViewDetails() {
    const { details } = this.props;
    return (
      <section>
        <p className="preview-details-name">{details.name}</p>
        <p className="preview-details-phone">{details.phone}</p>
        <p className="preview-details-email">{details.email}</p>
        <p className="preview-details-website">{details.website}</p>
      </section>
    );
  }

  editViewDetails() {
    const { details, handleDetailsChanges } = this.props;
    return (
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
    );
  }

  render() {
    const { editView } = this.props;

    return (
      <div>
        {editView && this.editViewDetails()}
        {!editView && this.previewViewDetails()}
      </div>
    );
  }
}

export default Details;
