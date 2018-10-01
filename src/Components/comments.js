import React from 'react';
import bootstrap from '../assets/styles/framework/bootstrap.less';
import comment from './comments.less';
import SingleComment from './singleCooment';

let myComment = () => {
  return (
    <div className={comment.commentWraper}>
      <h3 className={comment.title}>Discuss this task</h3>
      <div className={comment.coomentArea}>
        <SingleComment img={require('../assets/images/avatar/avatar-big-1.png')} title="John Dus" time="12 Minutes ago" />
        <div className={comment.addCommentArea}>
          <div className={[comment.singleComment, bootstrap.clearfix].join(' ')}>
            <div className={comment.avatar}>
              <img src={require('../assets/images/avatar/avatar-big-2.png')} alt="avatar big" />
            </div>
            <div className={comment.commentForm}>
              <div className={[bootstrap.inputGroup, comment.inputGroup].join(' ')}>
                <input type="text" className={[bootstrap.formControl, comment.formControl].join(' ')} placeholder="Add a comment" />
                <div className={bootstrap.inputGroupAppend}>
                  <span className={[bootstrap.inputGroupText, comment.inputGroupText].join(' ')}>
                    <img src={require('../assets/images/icons/happy-face.png')} alt="happy face" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default myComment;