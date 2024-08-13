import React from "react";
import "./VideoHeader.css";
import VideoHeaderElement from "./VideoHeaderElement";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const VideoHeader = () => {
  return (
    <div className="videoHeader">
      <VideoHeaderElement selected title="All" />
      <VideoHeaderElement title="Javascript" />
      <VideoHeaderElement title="React" />
      <VideoHeaderElement title="CSS" />
      <VideoHeaderElement title="Skills" />
      <VideoHeaderElement title="Gadgets" />
      <VideoHeaderElement title="Podcasts" />
      <VideoHeaderElement title="Music" />
      <VideoHeaderElement title="Lofi" />
      <VideoHeaderElement title="TED" />
      <VideoHeaderElement Icon={ArrowForwardIosIcon} />
    </div>
  );
};

export default VideoHeader;
