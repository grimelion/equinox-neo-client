import React from 'react';

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
    this.handleChangeKey = this.handleChangeKey.bind(this);
  }

  handleChangeKey(event) {
    this.setState({key: event.target.value});
  }

  handleChangePassword(event) {
    this.setState({password: event.target.value});
  }

  handleRegistration(key, password) {
  }

  handleLoggin(password) {
  }

  handleSubmit(type) {
    if(type === 'registration') {
      this.handleRegistration(this.state.key, this.state.password);
      this.setState({key: '', password: ''});
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
            key={this.state.key}
            password={this.state.password}
      />
    )
  }
}

export default Auth;