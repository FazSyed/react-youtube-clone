import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import { Avatar } from "@mui/material";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon className="header__menu" />
        <img
          className="header__logo"
          src="https://th.bing.com/th/id/OIP.D6pZbfI9woOeLhEVMyaoyQHaDi?rs=1&pid=ImgDetMain"
          alt=""
        />
      </div>

      <div className="header__input">
        <input placeholder="Search" type="text" />
        <SearchIcon className="header__inputButton" />
      </div>

      <div className="header__icons">
        <VideoCallOutlinedIcon className="header__icon" />
        <NotificationsOutlinedIcon className="header__icon" />
        <Avatar
          className="header__icon"
          alt="Fazilah"
          src="https://avatars.githubusercontent.com/u/144213373?v=4"
        />
      </div>
    </div>
  );
};

export default Header;
