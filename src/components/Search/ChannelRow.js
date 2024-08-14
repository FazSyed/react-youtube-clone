import React, { useEffect, useState } from "react";
import "./ChannelRow.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar } from "@mui/material";

const ChannelRow = ({
  image,
  channel,
  verified,
  subs,
  username,
  description,
}) => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribeClick = () => {
    setIsSubscribed(!isSubscribed);
  };

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
          <button
            className={isSubscribed ? "subscribed" : ""}
            onClick={handleSubscribeClick}
          >
            {isSubscribed ? (
              <>
                <NotificationsOutlinedIcon /> <h4>Subscribed</h4>{" "}
                <ExpandMoreIcon />{" "}
              </>
            ) : (
              "Subscribe"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChannelRow;
