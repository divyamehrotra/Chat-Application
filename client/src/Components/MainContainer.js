import React, { createContext, useState } from "react";
import "./Styles.css";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

export const MyContext = createContext(); 
function MainContainer() {
  const [refresh, setRefresh] = useState(true);

  return (
    <div className={"main-container"}>
      <MyContext.Provider value={{ refresh: refresh, setRefresh: setRefresh }}>
        <Sidebar />
        <Outlet />
      </MyContext.Provider>
    </div>
  );
}

export default MainContainer;
