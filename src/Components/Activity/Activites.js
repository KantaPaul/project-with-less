import React from 'react';
import classes from './activity.less';
import SingleActivity from './SingleActivity';

let activites = () => {
  return (
    <div className={classes.activiyWraper}>
      <h3 className={classes.activityTitle}>Activity</h3>
      <SingleActivity img={require('../../assets/images/avatar/mini-avatar-1.png')}>
        <span className={classes.activityDesc}><strong>Habib</strong> attached <strong>Logo.png</strong> to the task</span>
        <span className={classes.activityTime}>less than a minute ago</span>
      </SingleActivity>

      <SingleActivity img={require('../../assets/images/avatar/mini-avatar-2.png')}>
        <span className={classes.activityDesc}><strong>Ashraf Hossain</strong> set the due date to july 20, 2018 </span>
        <span className={classes.activityTime}>1 hour ago</span>
      </SingleActivity>

      <SingleActivity img={require('../../assets/images/avatar/mini-avatar-2.png')}>
        <span className={classes.activityDesc}><strong>John Dus</strong> comment on this link.  </span>
        <span className={classes.activityTime}>Yesterday at 4:30 PM</span>
      </SingleActivity>

      <SingleActivity img={require('../../assets/images/avatar/mini-avatar-3.png')}>
        <span className={classes.activityDesc}><strong>Sumaiya</strong> created this task.  20 july 2018   4:30 PM</span>
        <span className={classes.activityTime}>4:30 PM</span>
      </SingleActivity>
    </div>
  );
}

export default activites;