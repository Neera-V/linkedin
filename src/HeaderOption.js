import React from "react";
import "./HeaderOption.css";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function HeaderOption({ avatar, Icon, title, onClick, Drop }) {
  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className="headerOption">
      <div className="headerOption_link">
        <a href="" className="header_link">
          {Icon && <Icon className="headerOption_icon" />}
          {avatar && (
            <div>
              <Avatar
                style={{ width: "24px", height: "24px" }}
                className="headerOption_iconn"
                src={user ? user.photoURL : " "}
              >
                {user ? user.email[0] : " "}
              </Avatar>
            </div>
          )}
          {Drop && (
            <div className="icon_with_dropdown">
              <h3 className="headerOption_title">{title}</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                data-supported-dps="16x16"
                width="16"
                height="16"
                focusable="false"
                className="svgIcon"
                color="rgb(0 0 0 / 60%)"
              >
                <path d="M8 11L3 6h10z"></path>
              </svg>
            </div>
          )}
          {!Drop && <h3 className="headerOption_title">{title}</h3>}
        </a>
      </div>
    </div>
  );
}

export default HeaderOption;
