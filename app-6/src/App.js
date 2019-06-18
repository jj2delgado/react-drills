import React, { Component } from "react";
import "./App.css";
import Todo from "./Todo"

class App extends Component {
  constructor(){
    super()

    this.state ={
      task: '',
      todoList: []
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleInputBox(userInput){
    this.setState({task: userInput})
  }
  handleClick(){
    this.setState({todoList: [...this.state.todoList, this.state.task], task: ''})
  }

  render() {
    
    return (
      <div className="App">
        <h1>Your to-do List</h1>
        <input className="inputList" onChange={(e) => this.handleInputBox(e.target.value) }></input>
        <button className="inputButton" onClick={this.handleClick}>Add to List</button>
        {this.state.todoList.map((item, index) => {return <Todo key={index} todo={item} /> })}
      </div>
    );
  }
}

export default App;
