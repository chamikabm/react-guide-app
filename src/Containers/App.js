import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../Components/Persons/Persons'
import Cockpit from '../Components/Cockpit/Cockpit';
import AuxWithClass from '../hoc/AuxWithClass';

class App extends PureComponent {

  constructor(props) {
    super(props);
    console.log("[APP - REACT-LIFE_CYCLE] constructor");
  }

  state = {
    persons: [
      { name: "Chamika", age : 29 },
      { name: "Max", age : 27 },
      { name: "Voje", age : 28 },
    ],
    showPersons : true,
  };

  togglePersonsHandler = () => {
    this.setState((prevState, props) => {
      return {
        showPersons: !prevState.showPersons
      }
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

  componentWillMount () {
    console.log("[APP - REACT-LIFE_CYCLE] componentWillMount");
  }

  componentDidMount () {
    console.log("[APP - REACT-LIFE_CYCLE] componentDidMount");
  }

  componentWillReceiveProps (nextProps) {
    console.log("[APP - REACT-LIFE_CYCLE] componentWillReceiveProps", nextProps);
  }

  // shouldComponentUpdate (nextProps, nextState) {
  //   console.log("[APP - REACT-LIFE_CYCLE] shouldComponentUpdate", nextProps, nextState);
  //   return this.state.persons !== nextState.persons
  //     || this.state.showPersons !== nextState.showPersons;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log("[APP - REACT-LIFE_CYCLE] componentWillUpdate", nextProps, nextState);
  }

  componentDidUpdate() {
    console.log("[APP - REACT-LIFE_CYCLE] componentDidUpdate");
  }

  render() {
    console.log("[APP - REACT-LIFE_CYCLE] render");
    let persons = null;

    if (this.state.showPersons) {
      persons =
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        />
    }

    return (
      <AuxWithClass classes={classes.App}>
        <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
        {persons}
        <Cockpit
          appTitle={this.props.appTitle}
          clicked={this.togglePersonsHandler}
          showPersons={this.state.showPersons}
        />
      </AuxWithClass>
    );
  }
}

export default App;
