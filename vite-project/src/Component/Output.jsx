import React from 'react'

function Output(props) {
  return (
    <div>

<label htmlFor=""><i className="bx bx-play"></i>{props.name}</label>
          <iframe id="output"></iframe>
    </div>
  )
}

export default Output