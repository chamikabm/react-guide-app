import React from 'react';
import classes from '../../Styles/person.css';
import AuxWithClass from '../../../hoc/AuxWithClass';
import PropTypes from 'prop-types';

const person = (props) => {
  return (
      <AuxWithClass classes={classes.person}>
        <div className="closeButton"></div>
        <h1 onClick={props.click}>My name is {props.name}</h1>
        <p>My age is : {props.age}</p>
        {props.children ? props.children : null}
        <input type="text" onChange={props.changed} value={props.name}/>
      </AuxWithClass>
)};

Person.propTypes= {
  click: PropTypes.func,
  age: PropTypes.number,
  name: PropTypes.string,
  changed: PropTypes.func
};

export default person;