import React from "react";
import "./ChannelRow.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Avatar } from "@mui/material";

const ChannelRow = ({
  image,
  channel,
  verified,
  subs,
  username,
  description,
}) => {
  return (
    <div className="channelRow">
      <div className="channelRow__left">
        <Avatar src={image} className="channelRow__logo" alt={channel} />
      </div>

      <div className="channelRow__right">
        <div className="channelRow__text">
          <h4>
            {channel}{" "}
            {verified && <CheckCircleIcon className="channelRow__verified" />}
          </h4>
          <p>
            @{username} • {subs} subscribers
          </p>
          <p>{description}</p>
        </div>

        <div className="channelRow__subscribe">
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default ChannelRow;
