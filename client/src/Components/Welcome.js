import React from 'react'
import logo from "./logo.png"
import { useNavigate } from 'react-router-dom'

function Welcome() {
  const userData = JSON.parse(localStorage.getItem("userData"))
  console.log(userData)
  const nav = useNavigate()
  if(!userData){
    console.log("user not authenticated")
    nav('/');
  }
  return (
    <div className='welcome-container'>
        <img src={logo} alt='logo' className='welcome-logo' />
        <p>Hi! {userData.data.name}</p>
        <p> Welcome to the app</p>
    </div>
  )
}

export default Welcome
