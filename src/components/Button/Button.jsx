import React from 'react'

function Button({ title }) {

  const handleClick = () => {
  }

  return (
    <div className="button" onClick={handleClick}>
      {title}
    </div>
  )
}

export default Button