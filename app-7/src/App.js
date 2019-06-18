import React, { Component } from "react";
import "./App.css";
import Todo from "./Todo"
import NewTask from "./NewTask"
import List from "./List"

class App extends Component {
  constructor(){
    super()

    this.state ={
      list: []
    }
  }
  render() {

    return (
      <div className="App">
        <h1>Your to-do List</h1>
        <List />
        <NewTask />
      </div>
    );
  }
}

export default App;
