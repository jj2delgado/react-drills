import React, { Component } from "react";
import "./App.css";
import Login from "./Login"

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Login with your username and password</h1>
        <Login />
      </div>
    );
  }
}

export default App;
