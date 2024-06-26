import React, { useState } from 'react'
import './Styles.css'
import { IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import NightlightIcon from "@mui/icons-material/Nightlight";
import LightModeIcon from "@mui/icons-material/LightMode";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SearchIcon from "@mui/icons-material/Search";
import ConversationsItem from './ConversationsItem';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
  const[conversations,setConversations] = useState([
    {
      name: "Test1",
      lastMessage: "LastMessage",
      timeStamp: "Today"
    },
  ])
  const navigate = useNavigate();
  return (
    <div className='sidebar-container'>
      <div className='sb-header'>
        <div>
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
        </div>
        <div>
          <IconButton onClick={()=>{navigate('users')}}>
            <PersonAddIcon />
          </IconButton>
          <IconButton onClick={()=>{navigate('groups')}}>
            <GroupAddIcon />
          </IconButton>
          <IconButton onClick={()=>{navigate('create-groups')}}>
            <AddCircleIcon />
          </IconButton>
          <IconButton>
            <NightlightIcon />
          </IconButton>
        </div>
      </div>
      <div className='sb-search'>
        <IconButton>
          <SearchIcon/>
        </IconButton>
        <input placeholder='search' className='search-box' />
      </div>
      <div className='sb-conversations'>
        {conversations.map((conversation)=>{
          return <ConversationsItem props={conversation} key={conversation.name} />
        })}
      </div>
    </div>
  )
}

export default Sidebar
