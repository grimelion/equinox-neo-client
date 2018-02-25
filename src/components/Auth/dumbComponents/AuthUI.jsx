import React from 'react';

const AuthUI = (props) => {
  if (props.registration === true) {
    return (
      <div>
        <h1>Register as an observer</h1>
        <form>
          <label>
            Password:<br/>
            <input type="password" placeholder="Password" value={props.password} onChange={props.handleChangePassword}/>
          </label>
          <br/><br/>
          <label>
            Repeat password:<br/>
            <input type="password" placeholder="Repeat password"/>
          </label>
          <br/><br/>
          <button onClick={(e) =>{e.preventDefault(); props.handleSubmit('registration')}}>Generate key</button>
        </form>
    </div>
    )
  } else {
    return (
      <div>
        <h1>Sign in</h1>
        <form>
          <label>
            Key:<br/>
            <input type="text" placeholder="Key"/>
          </label>
          <br/><br/>
          <label>
            Password:<br/>
            <input type="password" placeholder="Password"/>
          </label>
          <br/><br/>
          <div className="submit-btn">Confirm</div>
        </form>
      </div>
    )
  }
}

export default AuthUI;
