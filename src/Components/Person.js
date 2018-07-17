import React from 'react';
import classes from './Styles/person.css'

const person = (props) => {
  return (
      <div className={classes.person}>
        <div className="closeButton"></div>
        <h1 onClick={props.click}>My name is {props.name}</h1>
        <p>My age is : {props.age}</p>
        {props.children ? props.children : null}
        <input type="text" onChange={props.changed} value={props.name}/>
      </div>
)};

export default person;