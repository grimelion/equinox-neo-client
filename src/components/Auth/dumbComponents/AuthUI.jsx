import React from 'react';

const AuthUI = (props) => {
  if (props.registration === true) {
    return (
      <div>
        <h1>Registration on local client</h1>
        <form>
          <label>
            Password:
            <input type="password" placeholder="Password" value={props.password} onChange={props.handleChangePassword}/>
          </label>
          <label>
            Repeat password:
            <input type="password" placeholder="Repeat password"/>
          </label>
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
            Password:
            <input type="password" placeholder="Password"/>
          </label>
          <div className="submit-btn">Confirm</div>
        </form>
      </div>
    )
  }
}

export default AuthUI;