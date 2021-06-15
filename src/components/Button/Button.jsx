import React from 'react'

function Button({ title }) {

  handleClick = () => {
  }

  return (
    <div className="button" onClick={handleClick}>
      {title}
    </div>
  )
}

export default Button