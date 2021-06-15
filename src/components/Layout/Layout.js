import React from 'react'
import logo from '../../assets/images/logo.png'

function Layout({ children }) {
  return (
    <div className="page">
      <img src={logo} className="page__logo"/>
      <div className="page__honeycomb-background"></div>
      {children}
    </div>
  )
}

export default Layout