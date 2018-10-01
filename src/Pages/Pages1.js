import React, { Component } from 'react';
import bootstrap from '../assets/styles/framework/bootstrap.less';
import Header from '../Components/Header/Header';
import Users from '../Components/Users/Users';
import InputAppend from '../Components/Inputs/inputAppend';
import Adduser from '../Components/AddUser/addUser.js';
import Comments from '../Components/comments';
import Acitvity from '../Components/Activity/Activites';

class PageOne extends Component {
  render() {
    return (
      <div>
        <Header classes={bootstrap.clearfix} />
        <Users classes={bootstrap.clearfix}/>
        <InputAppend />
        <Adduser />
        <Comments />
        <Acitvity />
      </div>
    );
  }
}

export default PageOne;
