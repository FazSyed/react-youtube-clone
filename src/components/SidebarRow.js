import React from "react";
import "./SidebarRow.css";
import { Avatar } from "@mui/material";

const SidebarRow = ({ selected, title, Icon, src }) => {
  return (
    <div className={`sidebarRow ${selected && "selected"}`}>
      {src ? (
        <Avatar src={src} className="sidebarRow__avatar" />
      ) : (
        <Icon className="sidebarRow__icon" />
      )}

      <p className="sidebarRow__title">{title}</p>
    </div>
  );
};

export default SidebarRow;
