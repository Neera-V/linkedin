import React from "react";
import "./HeaderOption1.css";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { Avatar } from "@mui/material";

function HeaderOption1({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);

  return (
    <div className="header_option1">
      <div onClick={onClick} className="headerOption11">
        {Icon && <img src={Icon} alt={title} className="headerOption_icon1" />}
        {avatar && (
          <div className="headerOption_icon2">
            <Avatar src={user ? user.photoURL : " "}>
              {user ? user.email[0] : " "}
            </Avatar>
          </div>
        )}
        <span className="headerOption_title1">{title}</span>
      </div>
    </div>
  );
}

export default HeaderOption1;
