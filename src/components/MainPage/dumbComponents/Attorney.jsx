import React from 'react'

const Attorney = (props) => {
  return (
    <div className="attorney">
      <h1>Review court case</h1>
      <form
        onSubmit={ e => {
          e.preventDefault();
          props.onAttorneySubmit();
        }}
      >
        <p>Case №:&nbsp;&nbsp;</p>
        <select>
          <option></option>
          <option>1290</option>
          <option>3281</option>
          <option>1032</option>
          <option>3191</option>
          <option>3922</option>
          <option>1923</option>
        </select>
        <br/>
        <br/>
        <label>Message</label>
        <br/>
        <textarea
          value={props.attorneyMsg}
          onChange={e => props.onAttorneyChange(e.target.value)}
        ></textarea>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  )
}

export default Attorney;
