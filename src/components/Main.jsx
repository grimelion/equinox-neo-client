require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

/*
 * Helping libs
 */
import { Switch, Route } from 'react-router-dom';

/*
 * Custom Components
 */
import Auth from './Auth/Auth';
import MainPage from './MainPage/MainPage';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstTimeUsage: true
    }

  }

  render() {
    return (
      <div className="index">
        <Switch>
          <Route path='/' exact render={() => (
            <Auth
              isFirstUsage={this.state.firstTimeUsage}
            />
          )} />
          <Route path='/main' exact render={() => (
            <MainPage />
          )} />
        </Switch>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
