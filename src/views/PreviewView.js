import React, { Component } from "react";
import Details from "../components/Details";

class PreviewView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Details previewView={this.props.previewView} />
      </div>
    );
  }
}

export default PreviewView;
