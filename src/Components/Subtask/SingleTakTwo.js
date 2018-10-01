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
      <div className={[classes.singletask, bootstrap.clearfix].join(' ')}>
        <div className={[bootstrap.customControl, bootstrap.customCheckbox].join(' ')}>
          <input type="checkbox" className={bootstrap.customControlInput} id={this.id} />
          <label className={bootstrap.customControlLabel} htmlFor={this.id}><span>Dokan theme page design</span></label>
        </div>
        <div className={classes.subtaskinfo}>
          <img src={require('../../assets/images/avatar/mini-avatar-5.png')} alt="mini avatar five" />
          <span>{this.props.name}</span>
          <span className={classes.date}>{this.props.date}</span>
        </div>
        <ul className={classes.editcontent}>
          <li>
            <img src={require('../../assets/images/icons/more.png')} alt="more" className={classes.mainimage} />
            <img src={require('../../assets/images/icons/more-hover.png')} alt="more" className={classes.hoverimage} />
          </li>
          <li>
            <img src={require('../../assets/images/icons/pencil.png')} alt="pencil" className={classes.mainimage} />
            <img src={require('../../assets/images/icons/pencil-hover-2.png')} alt="pencil" className={classes.hoverimage} />
          </li>
          <li>
            <img src={require('../../assets/images/icons/delete.png')} alt="delete" className={classes.mainimage} />
            <img src={require('../../assets/images/icons/delete-hover.png')} alt="delete" className={classes.hoverimage} />
          </li>
        </ul>
        <p>{this.props.paragraph}</p>
      </div>
    )
  }
}

export default SingleSubtask;