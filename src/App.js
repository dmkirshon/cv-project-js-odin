import React, { Component } from "react";
import EditView from "./views/EditView";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <EditView />
      </div>
    );
  }
}

export default App;
