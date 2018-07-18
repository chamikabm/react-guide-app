import React, { Component }from 'react';
import classes from '../../Styles/person.css';
import AuxWithClass from '../../../hoc/AuxWithClass';
import PropTypes from 'prop-types';
import { AuthContext } from "../../../Containers/App";

class Person extends Component {

  constructor(props) {
    super(props);
    this.inputElement =  React.createRef();
    console.log("[Person - REACT-LIFE_CYCLE] constructor");
  }

  componentWillMount () {
    console.log("[Person - REACT-LIFE_CYCLE] componentWillMount");
  }

  componentDidMount () {
    console.log("[Person - REACT-LIFE_CYCLE] componentDidMount");
    if (this.props.position === 0) {
      this.inputElement.current.focus();
    }
  }

  componentWillReceiveProps (nextProps) {
    console.log("[Person - REACT-LIFE_CYCLE] componentWillReceiveProps", nextProps);
  }

  shouldComponentUpdate (nextProps, nextState) {
    console.log("[Person - REACT-LIFE_CYCLE] shouldComponentUpdate", nextProps, nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("[Person - REACT-LIFE_CYCLE] componentWillUpdate", nextProps, nextState);
  }

  componentDidUpdate() {
    console.log("[Person - REACT-LIFE_CYCLE] componentDidUpdate");
  }

  render(){
    console.log("[Person - REACT-LIFE_CYCLE] render");

    return (
      <AuxWithClass classes={classes.person}>
        <AuthContext.Consumer>
          {auth => auth ? "Authenticated!" : null}
        </AuthContext.Consumer>
        <h1 onClick={this.props.click}>My name is {this.props.name}</h1>
        <p>My age is : {this.props.age}</p>
        {this.props.children ? this.props.children : null}
        <input
          ref={this.inputElement}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </AuxWithClass>
    )
  }
}

Person.propTypes= {
  click: PropTypes.func,
  age: PropTypes.number,
  name: PropTypes.string,
  changed: PropTypes.func
};

export default Person;