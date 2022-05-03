import React, { Component } from "react";
import EditView from "./views/EditView";
import PreviewView from "./views/PreviewView";

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

    this.handleEditView = this.handleEditView.bind(this);
    this.handlePreviewView = this.handlePreviewView.bind(this);
  }

  handleNameChange() {}

  handleEditView() {
    this.setState({
      edit: true,
    });
  }

  handlePreviewView() {
    this.setState({
      edit: false,
    });
  }

  render() {
    return (
      <div>
        <button className="edit view-button" onClick={this.handleEditView}>
          Edit
        </button>
        <button
          className="preview view-button"
          onClick={this.handlePreviewView}
        >
          Preview
        </button>
        {this.state.edit && (
          <EditView editView={this.state.edit} details={this.state.details} />
        )}
        {!this.state.edit && <PreviewView previewView={!this.state.edit} />}
      </div>
    );
  }
}

export default App;
