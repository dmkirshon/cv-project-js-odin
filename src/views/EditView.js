import React, { Component } from "react";
import Details from "../components/Details";

class EditView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Details Edit={true} />
      </div>
    );
  }
}

export default EditView;
