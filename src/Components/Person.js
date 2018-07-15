import React from 'react';
import './Styles/person.css'

const person = (props) => {
  return (
      <div className="person">
        <h1>My name is {props.name}</h1>
        <p>My age is : {props.age}</p>
        {props.children ? props.children : ''}
      </div>
)};

export default person;