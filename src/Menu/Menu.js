import React from 'react';
import {NavLink} from 'react-router-dom';
import bootstrap from '../assets/styles/framework/bootstrap.less';

let Menu = () => {
  return (
    <div className={[bootstrap.navbarLight].join(' ')}>
      <div className={bootstrap.container}>
        <div className={bootstrap.row}>
          <div className={bootstrap.colLg8}>
            <ul className={[bootstrap.nav, bootstrap.navPills].join(' ')}>
              <li>
                <NavLink className={bootstrap.navLink} exact to="/" activeClassName={bootstrap.active}>Home</NavLink>
              </li>
              <li>
                <NavLink className={bootstrap.navLink} activeClassName={bootstrap.active} to="/page-two">Page Two</NavLink>
              </li>
              <li>
                <NavLink className={bootstrap.navLink} activeClassName={bootstrap.active} to="/page-three">Page Three</NavLink>
              </li>
              <li>
                <NavLink className={bootstrap.navLink} activeClassName={bootstrap.active} to="/page-four">Page Four</NavLink>
              </li>
            </ul>
          </div>
          <div className={bootstrap.colLg4}>
            <div className={bootstrap.textRight}>
              <a className={[bootstrap.btn, bootstrap.btnPrimary, bootstrap.mr2].join(' ')} target="_blank" href="https://github.com/KantaPaul/my-project">Git Repo</a>
              <a className={[bootstrap.btn, bootstrap.btnSecondary].join(' ')} target="_blank" href="https://drive.google.com/open?id=1p_Zulunkzhi8hP1YVnHwsqHgUF_6w1VT">Download</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu;