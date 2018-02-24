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
import NotFound from './NotFound/NotFound';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstTimeUsage: true,
      isEnabledMainPage: false
    }

    this.enableMainPage = this.enableMainPage.bind(this);
  }

  enableMainPage() {
    this.setState({isEnabledMainPage: true});
  }

  render() {
    return (
      <div className="index">
        <Switch>
          <Route path='/' exact render={() => (
            <Auth
              isFirstUsage={this.state.firstTimeUsage}
              enableMainPage={this.enableMainPage}
            />
          )} />
          <Route path='/main' exact render={() => {
            if (this.state.isEnabledMainPage === true) {
              return (<MainPage />)
            } else {
               return (<NotFound />)
            }
          }} />
        </Switch>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
