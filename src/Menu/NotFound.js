import React from 'react';
import {Link} from 'react-router-dom';
import classes from '../assets/styles/style.less';
import bootstrap from '../assets/styles/framework/bootstrap.less';

let notFound = () => {
  return (
    <div className={[classes.notfound, bootstrap.textCenter].join(' ')}>
      <h1 className={bootstrap.display3}>404 Not Found</h1>
      <div className={bootstrap.btnGroup}>
        <Link to="/" className={[bootstrap.btn, bootstrap.btnPrimary].join(' ')}>Go Home</Link>
      </div>
    </div>
  )
}

export default notFound;