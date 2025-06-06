import './App.css';
import React from 'react';
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom';
import ChatArea from './Components/ChatArea';
import CreateGroups from './Components/CreateGroups';
import Login from './Components/Login';
import MainContainer from './Components/MainContainer';
import Welcome from './Components/Welcome';
import Groups from './Components/Groups';
import Users from './Components/Users';
import { useDispatch, useSelector } from "react-redux";


function App() {
  const dispatch = useDispatch();
  const lightTheme = useSelector((state) => state.themeKey);
  return (
    <div className={"App" + (lightTheme ? "" : "-dark")}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="app" element={<MainContainer />}>
          <Route path="welcome" element={<Welcome />}></Route>
          <Route path="chat/:_id" element={<ChatArea />}></Route>
          <Route path="users" element={<Users />}></Route>
          <Route path="groups" element={<Groups />}></Route>
          <Route path="create-groups" element={<CreateGroups />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
