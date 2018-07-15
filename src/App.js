import React, { Component } from 'react';
import './App.css';
import Person from './Components/Person'

class App extends Component {

  state = {
    persons: [
      { name: "Chamika", age : 29 },
      { name: "Max", age : 27 },
      { name: "Voje", age : 28 },
    ]
  };

  nameChangeHandler = () => {
    console.log("clicked!!");
    this.setState({
      persons: [
        { name: "Meru", age : 29 },
        { name: "Max", age : 27 },
        { name: "Voje", age : 29 }
        ]}
    );
  };

  render() {
    return (
      <div className="App">
        {
          this.state.persons.map((person, key) => <Person name={person.name} age={person.age} key={key}/>)
        }
        <button onClick={this.nameChangeHandler} className="nameButton">Change the values</button>
      </div>
    );
  }
}

export default App;
