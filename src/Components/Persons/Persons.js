import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  constructor(props) {
    super(props);
    console.log("[Persons - REACT-LIFE_CYCLE] constructor");
  }

  componentWillMount () {
    console.log("[Persons - REACT-LIFE_CYCLE] componentWillMount");
  }

  componentDidMount () {
    console.log("[Persons - REACT-LIFE_CYCLE] componentDidMount");
  }

  componentWillReceiveProps (nextProps) {
    console.log("[Persons - REACT-LIFE_CYCLE] componentWillReceiveProps", nextProps);
  }

  shouldComponentUpdate (nextProps, nextState) {
    console.log("[Persons - REACT-LIFE_CYCLE] shouldComponentUpdate", nextProps, nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("[Persons - REACT-LIFE_CYCLE] componentWillUpdate", nextProps, nextState);
  }

  componentDidUpdate() {
    console.log("[Persons - REACT-LIFE_CYCLE] componentDidUpdate");
  }


  render() {
    console.log("[Persons - REACT-LIFE_CYCLE] render");

    return this.props.persons.map((person, key) =>
      <Person
        name={person.name}
        age={person.age}
        key={key}
        click={() => this.props.clicked(key)}
        changed={(event) => this.props.changed(event, key)}
      />);
  };
}

export default Persons;