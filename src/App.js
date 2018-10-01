import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import bootstrap from './assets/styles/framework/bootstrap.less';
import classes from './assets/styles/style.less';
import PageOne from './Pages/Pages1';
import PageTwo from './Pages/Pages2';
import PageThree from './Pages/Pages3';
import PageFour from './Pages/Pages4';
import Menu from './Menu/Menu';
import NotFound from './Menu/NotFound';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Menu />
          <main className={classes.mainwraper}>
            <div className={bootstrap.container}>
              <div className={bootstrap.row}>
                <div className={[bootstrap.colLg7, bootstrap.mxAuto].join(' ')}>
                  <div className={classes.App}>
                    <Switch>
                      <Route exact={true} path="/" component={PageOne} />
                      <Route path="/page-two" component={PageTwo} />
                      <Route path="/page-three" component={PageThree} />
                      <Route path="/page-four" component={PageFour} />
                      <Route component={NotFound} />
                    </Switch>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.bgOverlay}></div>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
