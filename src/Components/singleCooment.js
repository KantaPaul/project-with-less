import React from 'react';
import bootstrap from '../assets/styles/framework/bootstrap.less';
import comment from './comments.less';

let singleComment = (props) => {
  return (
    <div className={[comment.singleComment, bootstrap.clearfix].join(' ')}>
      <div className={comment.avatar}>
        <img src={props.img} alt="avatar big" />
      </div>
      <div className={comment.coomentContent}>
        <div className={comment.commentorBio}>
          <span className={comment.commentorTitle}>{props.title}</span>
          <span className={comment.commentorTime}>{props.time}</span>
        </div>
        <p>Lorem Ipsum is simply dummy text of the <br/> printing and typesetting industry.</p>
        <a href="$" className={comment.commentLink}>Reply</a>
      </div>
      <img src={require('../assets/images/icons/angle.png')} alt="angle" className={comment.angleicon} />
    </div>
  )
}

export default singleComment;