import React from 'react';
import global from '../../assets/styles/style.less';
import lists from '../../assets/styles/elements/lists.less';

let header = (props) => {
  return (
    <div className={global.cardHeader}>
      <div className={props.classes}>
        <div className={global.leftContet}>
          <ul className={[lists.lists, lists.listinline].join(' ')}>
            <li><img src={require('../../assets/images/avatar/avatar-1.png')} alt="avatar one" /></li>
            <li><img src={require('../../assets/images/avatar/avatar-2.png')} alt="avatar two" /></li>
            <li><img src={require('../../assets/images/avatar/avatar-3.png')} alt="avatar three" /></li>
            <li><img src={require('../../assets/images/avatar/avatar-4.png')} alt="avatar four" /></li>
          </ul>
        </div>
        <div className={global.rightCotent}>
          <ul className={[lists.lists2, lists.listinline].join(' ')}>
            <li><img src={require('../../assets/images/icons/calender.png')} alt="calendar" /></li>
            <li><img src={require('../../assets/images/icons/clock.png')} alt="clock" /></li>
            <li><img src={require('../../assets/images/icons/tag.png')} alt="tag" /></li>
            <li><img src={require('../../assets/images/icons/upload.png')} alt="upload" /></li>
            <li><img src={require('../../assets/images/icons/attach.png')} alt="attach" /></li>
            <li><img src={require('../../assets/images/icons/star.png')} alt="star" /></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default header;