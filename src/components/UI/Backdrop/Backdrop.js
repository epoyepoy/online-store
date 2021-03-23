import React from 'react';
import classes from './Backdrop.module.css';

const backdrop = props =>
  props.show ? (
    <div className={classes.Backdrop} onClick={props.clicked}></div>
  ) : null;
  // if (props.show) {
  //   return <div className={classes.Backdrop} onClick={props.clicked}></div>;
  // } else {
  //   return null;
  // }

export default backdrop;
