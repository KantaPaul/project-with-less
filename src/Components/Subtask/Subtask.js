import React from 'react';
import bootstrap from '../../assets/styles/framework/bootstrap.less';
import classes from './Subtask.less';
import SingleTask from './SingleTak';

let subtask = () => {
  return (
    <div className={classes.subtaskarea}>
      <h2 className={classes.title}>Subtask</h2>
      
      <SingleTask name="Sumaiya" />

      <div className={bootstrap.inputGroup}>
        <div className={bootstrap.inputGroupPrepend}>
          <div className={[bootstrap.inputGroupText, classes.inputgrouptext].join(' ')}>+</div>
        </div>
        <input type="text" className={[bootstrap.formControl, classes.formcontrol].join(' ')} id="inlineFormInputGroupUsername2" placeholder="Add a subtask"/>
      </div>
    </div>
  );
}

export default subtask;