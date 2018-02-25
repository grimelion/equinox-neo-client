import React from 'react'

const Attorney = (props) => {
  return (
    <div className="attorney">
        <button onClick={props.makeRequest}>Make Request</button>
    </div>
  )
}

export default Attorney;