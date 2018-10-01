import React, {Component} from 'react';
import bootstrap from '../../assets/styles/framework/bootstrap.less';
import classes from './Subtask.less';
import uuid from 'uuid';

class SingleSubtask extends Component {
  componentWillMount() {
    this.id = uuid();
  }
  render () {
    let id = this.id;
    return (
      <div className={classes.singletask}>
        <div className={[bootstrap.customControl, bootstrap.customCheckbox].join(' ')}>
          <input type="checkbox" className={bootstrap.customControlInput} id={this.id} />
          <label className={bootstrap.customControlLabel} htmlFor={this.id}><span>Dokan theme page design</span></label>
        </div>
        <div className={classes.subtaskinfo}>
          <img src={require('../../assets/images/avatar/mini-avatar-5.png')} alt="mini avatar five" />
          <span>{this.props.name}</span>
        </div>
      </div>
    )
  }
}

export default SingleSubtask;