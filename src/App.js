import React, { Component } from 'react';
import classes from './App.css';
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

  nameChangeHandler = (event, personIndex) => {
    const updatingPerson =  {...this.state.persons[personIndex]};
    updatingPerson.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = updatingPerson;

    this.setState({
      persons
    });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons
    });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = this.state.persons.map((person, key) =>
        <Person
          name={person.name}
          age={person.age}
          key={key}
          click={() => this.deletePersonHandler(key)}
          changed={(event) => this.nameChangeHandler(event, key)}
        />);
    }

    return (
      <div className={classes.App}>
        <div>
          {persons}
        </div>
        <button onClick={this.togglePersonsHandler} className={classes.nameButton}>
          {this.state.showPersons ? 'Hide' : 'Show'} People
        </button>
      </div>
    );
  }
}

export default App;
