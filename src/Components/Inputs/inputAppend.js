import React from 'react';
import bootstrap from '../../assets/styles/framework/bootstrap.less';
import classes from '../../assets/styles/style.less';

let inputAppend = () => {
  return (
    <div className={classes.appendInput}>
      <div className={bootstrap.inputGroup}>
        <div className={bootstrap.inputGroupPrepend}>
          <span className={[bootstrap.inputGroupText, classes.inputGroupText].join(' ')}>
            <img src={require('../../assets/images/icons/align.png')} alt="align" />
          </span>
        </div>
        <input type="text" className={[bootstrap.formControl, classes.formControl].join(' ')} placeholder="Description" />
        <div className={bootstrap.inputGroupAppend}>
          <span className={[bootstrap.inputGroupText, classes.inputGroupText].join(' ')}>
            <img src={require('../../assets/images/icons/pencil.png')} alt="pencil" />
          </span>
        </div>
      </div>
    </div>
  )
}

export default inputAppend;