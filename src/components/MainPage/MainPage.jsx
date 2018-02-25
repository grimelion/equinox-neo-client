import React from 'react'

/*
 * Nested components - different functionality
 */
import Lawyer from './dumbComponents/Lawyer';
import Attorney from './dumbComponents/Attorney';
import Court from './dumbComponents/Court';

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}

    this.makeRequest = this.makeRequest.bind(this);
  }

  makeRequest() {
    
  }

  render() {
    return (
      <div className="mainPage-container">
        <Court />
        <Lawyer />
        <Attorney makeRequest={this.makeRequest}/>
      </div>
    )
  }
}

export default MainPage;
