import React, { Component } from 'react';
import './App.css';
import Person from './Components/Person'

class App extends Component {

  state = {
    persons: [
      { name: "Chamika", age : 29 },
      { name: "Max", age : 27 },
      { name: "Voje", age : 28 },
    ],
    showPersons : true,
  };

  togglePersonsHandler = () => {
    const isShowing = this.state.showPersons;
    this.setState({
      showPersons: !isShowing
    });
  };

  render() {

    let persons = null;
    if (this.state.showPersons) {
      persons = this.state.persons.map((person, key) => <Person name={person.name} age={person.age} key={key}/>);
    }

    return (
      <div className="App">
        <div>
          {persons}
        </div>
        <button onClick={this.togglePersonsHandler} className="nameButton">Change the values</button>
      </div>
    );
  }
}

export default App;
