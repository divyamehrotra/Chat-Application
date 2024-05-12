import React, {useState} from 'react'
import './Styles.css'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import ChatArea from './ChatArea'
import Welcome from './Welcome'
import CreateGroups from './CreateGroups'

function MainContainer() {
  return (
    <div className='main-container'>
        <Sidebar/>
        <Outlet />
        {/* <Welcome /> */}
        {/* <CreateGroups /> */}
        {/* <ChatArea/> */}
    </div>
  )
}

export default MainContainer
