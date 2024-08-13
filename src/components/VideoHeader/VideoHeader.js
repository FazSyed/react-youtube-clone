import React from "react";
import "./VideoHeader.css";
import VideoHeaderElement from "./VideoHeaderElement";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const VideoHeader = () => {
  return (
    <div className="videoHeader">
      <VideoHeaderElement
        className="videoHeader__element"
        selected
        title="All"
      />
      <VideoHeaderElement className="videoHeader__element" title="Javascript" />
      <VideoHeaderElement className="videoHeader__element" title="React" />
      <VideoHeaderElement className="videoHeader__element" title="HTML" />
      <VideoHeaderElement className="videoHeader__element" title="CSS" />
      <VideoHeaderElement className="videoHeader__element" title="Spline" />
      <VideoHeaderElement className="videoHeader__element" title="Skills" />
      <VideoHeaderElement className="videoHeader__element" title="Gadgets" />
      <VideoHeaderElement className="videoHeader__element" title="Podcasts" />
      <VideoHeaderElement className="videoHeader__element" title="Music" />
      <VideoHeaderElement className="videoHeader__element" title="Lofi" />
      <VideoHeaderElement className="videoHeader__element" title="TED" />
      <VideoHeaderElement
        className="videoHeader__element"
        Icon={ArrowForwardIosIcon}
      />
    </div>
  );
};

export default VideoHeader;
