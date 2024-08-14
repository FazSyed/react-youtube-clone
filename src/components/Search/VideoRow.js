import React from "react";
import "./VideoRow.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Avatar } from "@mui/material";

const VideoRow = ({
  image,
  title,
  views,
  timestamp,
  logo,
  channel,
  verified,
  description,
}) => {
  return (
    <div className="videoRow">
      <img src={image} alt="" />
      <div className="videoRow__text">
        <h3>{title}</h3>
        <p className="videoRow__headline">
          {views} views • {timestamp} ago
        </p>
        <div className="videoRow__channel">
          <Avatar src={logo} className="videoRow__logo" alt={channel} />
          <p className="">
            {channel}
            {verified && <CheckCircleIcon className="videoRow__verified" />}
          </p>
        </div>

        <p className="videoRow__description">{description}</p>
      </div>
    </div>
  );
};

export default VideoRow;
