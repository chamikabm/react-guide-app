import React from 'react';
import classes from '../Styles/cockpit.css';

const cockpit = (props) =>
  <div>
    <h1>{props.appTitle}</h1>
    <button
      onClick={props.clicked}
      className={classes.nameButton}>
      {props.showPersons ? 'Hide' : 'Show'} People
    </button>
  </div>;

export default cockpit;