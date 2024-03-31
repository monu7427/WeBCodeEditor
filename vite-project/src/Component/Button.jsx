import React from 'react'

function Button(props) {
  return (
    <div>

<div className="buttonDiv">
        <button className='RunButton' onClick={props.run}>{props.name}</button>
        </div>

    </div>
  )
}

export default Button