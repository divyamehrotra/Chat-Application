import React, { useContext, useEffect, useState } from "react";
import "./Styles.css";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import logo from "./logo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MyContext } from "./MainContainer";

function Users() {
  const { refresh, setRefresh } = useContext(MyContext);

  const [users, setUsers] = useState([]);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const nav = useNavigate();
  // const dispatch = useDispatch();

  if (!userData) {
    console.log("User not Authenticated");
    nav(-1);
  }

  useEffect(() => {
    console.log("Users refreshed");
    const config = {
      headers: {
        Authorization: `Bearer ${userData.data.token}`,
      },
    };
    axios.get("http://localhost:5000/user/fetchUsers", config).then((data) => {
      console.log("UData refreshed in Users panel ");
      setUsers(data.data);
      // setRefresh(!refresh);
    });
  }, [refresh]);

  return (
    <>
    <div className="users_dis">
        <div className={"ug-header"}>
          <img
            src={logo}
            style={{ height: "2rem", width: "2rem", marginLeft: "10px" }}
          />
          <p className={"ug-title"}>
            Available Users
          </p>
          <IconButton
            className={"icon"}
            onClick={() => {
              setRefresh(!refresh);
            }}
          >
            <RefreshIcon />
          </IconButton>
        </div>
        <div className={"sb-search"}>
          <IconButton className={"icon"}>
            <SearchIcon />
          </IconButton>
          <input
            placeholder="Search"
            className={"search-box"}
          />
        </div>
        <div className="ug-list">
          {users.map((user, index) => {
            return (
              <div
                className={"list-tem"}
                key={index}
                onClick={() => {
                  console.log("Creating chat with ", user.name);
                  const config = {
                    headers: {
                      Authorization: `Bearer ${userData.data.token}`,
                    },
                  };
                  axios.post(
                    "http://localhost:5000/chat/",
                    {
                      userId: user._id,
                    },
                    config
                  );
                  // dispatch(refreshSidebarFun());
                }}
              >
                <p className={"con-icon"}>T</p>
                <p className={"con-title"}>
                  {user.name}
                </p>
              </div>
            );
          })}
        </div>
        </div>
        </>
  );
}

export default Users;