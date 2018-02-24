import React from 'react';

import AuthUI from './dumbComponents/AuthUI';

class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      key: '',
      password: '',
      registration: true
    }
    
  }

  componentWillMount() {
    if (this.props.isFirstUsage === false) {
      this.setState({registration: false});
    }
  }

  render() {
    return (
      <AuthUI
            registration={this.state.registration}
      />
    )
  }
}

export default Auth;