import React, {Component} from 'react';
import bootstrap from '../../assets/styles/framework/bootstrap.less';
import classes from './addUser.less';

class AddUser extends Component {
  state = {
    showUserGroup: false,
  }

  showUsers = () => {
    let doShow = this.state.showUserGroup;
    console.log(doShow)
    this.setState(() => {
      return {
        showUserGroup: !doShow,
      }
    })
  }

  cancels = () => {
    this.setState(() => {
      return {
        showUserGroup: false
      }
    })
  }

  render() {

    let person = null;
    if (this.state.showUserGroup) {
      person = (
        <div className={classes.addpersonwraper}>
          <h4 className={classes.title}>Assign to</h4>
          <input type="search" className={bootstrap.formControl} placeholder="Search user" />
          <ul className={[bootstrap.listGroup, classes.listGroup].join(' ')}>
            <li className={[bootstrap.listGroupItem, bootstrap.dFlex, bootstrap.alignItemsCenter].join(' ')}>
              <img src={require('../../assets/images/avatar/mini-avatar-4.png')} alt="mini avatar" />
              Ashraf Hossain
              <img className={classes.cross} src={require('../../assets/images/icons/cross.png')} alt="cross" />
              <img className={[classes.hovercross, classes.cross].join(' ')} src={require('../../assets/images/icons/greenCross.png')} alt="cross" />
            </li>

            <li className={[bootstrap.listGroupItem, bootstrap.dFlex, bootstrap.alignItemsCenter].join(' ')}>
              <img src={require('../../assets/images/avatar/mini-avatar-5.png')} alt="mini avatar" />
              Sumaiya Siddika
              <img className={classes.cross} src={require('../../assets/images/icons/cross.png')} alt="cross" />
              <img className={[classes.hovercross, classes.cross].join(' ')} src={require('../../assets/images/icons/greenCross.png')} alt="cross" />
            </li>
            
            <li className={[bootstrap.listGroupItem, bootstrap.dFlex, bootstrap.alignItemsCenter].join(' ')}>
              <img src={require('../../assets/images/avatar/mini-avatar-5.png')} alt="mini avatar" />
              Habibur Rahman
              <img className={classes.cross} src={require('../../assets/images/icons/cross.png')} alt="cross" />
              <img className={[classes.hovercross, classes.cross].join(' ')} src={require('../../assets/images/icons/greenCross.png')} alt="cross" />
            </li>
          </ul>
          <div className={classes.btngroup}>
            <a href="$" className={[bootstrap.btn, bootstrap.btnPrimary, classes.btn, classes.btnPrimary].join(' ')}>Done</a>
            <a onClick={this.cancels} className={[bootstrap.btn, bootstrap.btnOutlineSecondary, classes.btn, classes.btnOutlineSecondary].join(' ')}>Cancel</a>
          </div>
        </div>
      )
    }
    return (
      <div className={classes.adduserWraper}>
        <div className={bootstrap.inputGroup}>
          <input type="text" placeholder="Dokan Theme De" className={[bootstrap.formControl, classes.formControl].join(' ')} aria-label="Username" aria-describedby="basic-addon1" />
          <ul className={classes.userAddList}>
            <li data-title="Add User" onClick={this.showUsers}>
              <img src={require('../../assets/images/icons/person.png')} alt="person" className={classes.mainimage} />
              <img src={require('../../assets/images/icons/person-hover.png')} alt="person" className={classes.hoverimage} />
            </li>

            <li data-title="Edit User">
              <img src={require('../../assets/images/icons/pencil.png')} alt="pencil" className={classes.mainimage} />
              <img src={require('../../assets/images/icons/pencil-hover.png')} alt="pencil" className={classes.hoverimage} />
            </li>

            <li data-title="Edit Date">
              <img src={require('../../assets/images/icons/calender.png')} alt="calendar" className={classes.mainimage} />
              <img src={require('../../assets/images/icons/calender-hover.png')} alt="calendar" className={classes.hoverimage} />
            </li>
          </ul>
        </div>
        {person}
      </div>
    );
  }
}

export default AddUser;