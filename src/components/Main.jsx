require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

import Neon from '@cityofzion/neon-js';

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
      isEnabledMainPage: true,
      store: ''
    }

    this.enableMainPage = this.enableMainPage.bind(this);
    this.storePassword = this.storePassword.bind(this);
  }

  storePassword(password) {
    this.setState({store: password});
  }

  enableMainPage() {
    this.setState({isEnabledMainPage: true});
    const privateKey = Neon.create.privateKey(),
          wif = Neon.get.WIFFromPrivateKey(privateKey),
	  client = Neon.create.rpcClient('http://localhost:30333');
    client.getBlockCount().then(res => console.log(res));
    setTimeout(() => console.log(wif), 2000);
  }

  render() {
    return (
      <div className="index">
        <Switch>
          <Route path='/' exact render={() => (
            <Auth
              isFirstUsage={this.state.firstTimeUsage}
              enableMainPage={this.enableMainPage}
              storePassword={this.storePassword}
            />
          )} />
          <Route path='/main' exact render={() => {
            if (this.state.isEnabledMainPage === true) {
              return (<MainPage enableMainPage={this.enableMainPage}/>)
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
