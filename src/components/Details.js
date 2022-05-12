import React from "react";

const Details = ({ editView, details, handleDetailsChanges }) => {
  function previewViewDetails() {
    return (
      <section>
        <p className="preview-details-name">{details.name}</p>
        <p className="preview-details-phone">{details.phone}</p>
        <p className="preview-details-email">{details.email}</p>
        <p className="preview-details-website">{details.website}</p>
      </section>
    );
  }

  function editViewDetails() {
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

  return (
    <div>
      {editView && editViewDetails()}
      {!editView && previewViewDetails()}
    </div>
  );
};

export default Details;
