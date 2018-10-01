import React from 'react';
import classes from './activity.less';

let singleActivity = (props) => {
  return (
    <div className={classes.singleActivity}>
      <img src={props.img} alt="mini avatar" />
      {props.children}
    </div>
  );
}

export default singleActivity;