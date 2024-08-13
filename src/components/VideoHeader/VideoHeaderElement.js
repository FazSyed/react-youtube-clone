import React from "react";
import "./VideoHeaderElement.css";

const VideoHeaderElement = ({ title, Icon, selected }) => {
  return (
    <div className="videoHeaderElement">
      {Icon ? (
        <Icon className="videoHeaderElement__icon" />
      ) : (
        <p className={`${selected && "selected"}`}>{title}</p>
      )}
    </div>
  );
};

export default VideoHeaderElement;
