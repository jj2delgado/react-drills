import React, { Component } from "react";
import "./App.css";
import Image from "./Image"

class App extends Component {

  render() {
    return (
      <div className="App">
        <Image source={"https://i.pinimg.com/736x/14/97/9e/14979ef61430d7a7b0855a862d2efa30.jpg"}/>
      </div>
    );
  }
}

export default App;
