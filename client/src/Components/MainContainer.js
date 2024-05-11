import React, {useState} from 'react'
import './Styles.css'
import Sidebar from './Sidebar'
import ChatArea from './ChatArea'
import conversations from './conversations.json'

function MainContainer() {
  const[conversations,setConversations] = useState([
    {
      name: "Test1",
      lastMessage: "LastMessage",
      timeStamp: "Today"
    },
  ])
  return (
    <div className='main-container'>
        <Sidebar/>
        <ChatArea props={conversations[0]}/>
    </div>
  )
}

export default MainContainer
