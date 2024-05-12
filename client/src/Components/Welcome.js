import React from 'react'
import logo from "./logo.png"

function Welcome() {
  return (
    <div className='welcome-container'>
        <img src={logo} alt='logo' className='welcome-logo' />
        <p>View chats</p>
    </div>
  )
}

export default Welcome
