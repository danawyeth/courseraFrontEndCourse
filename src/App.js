import React, { Component } from "react";
import Main from "./components/MainComponent";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div>
        <Main />
        {/*{dishes=this.state.dishes}*/}
      </div>
    );
  }
}

export default App;