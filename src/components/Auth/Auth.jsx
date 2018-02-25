import React from 'react';

import { sha256 } from 'crypto-js';

import { Redirect } from 'react-router-dom';

import AuthUI from './dumbComponents/AuthUI';

class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      key: '',
      password: '',
      registration: true,
      isAuthPassed: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRegistration = this.handleRegistration.bind(this);
    this.handleLoggin = this.handleLoggin.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleChangePassword(event) {
    this.setState({password: event.target.value});
  }

  handleRegistration(password) {
    this.props.storePassword(password);
    this.props.enableMainPage();
    this.setState({isAuthPassed: true});
  }

  handleLoggin(password) {
    this.props.storePassword(password);
    this.setState({isAuthPassed: true});
  }

  handleSubmit(type) {
    if(type === 'registration') {
      this.handleRegistration(this.state.password);
      this.setState({password: ''});
    } else {
      this.handleLoggin(this.state.password);
      this.setState({password: ''});
    }
  }

  componentWillMount() {
    if (this.props.isFirstUsage === false) {
      this.setState({registration: false});
    }
  }

  render() {
    if(this.state.isAuthPassed === true) {
      return <Redirect to="/main"/>
    }
    return (
      <AuthUI
            registration={this.state.registration}
            password={this.state.password}
            handleSubmit={this.handleSubmit}
            handleChangePassword={this.handleChangePassword}
      />
    )
  }
}

export default Auth;
