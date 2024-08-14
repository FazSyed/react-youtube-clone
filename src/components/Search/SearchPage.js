import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import VideoHeaderElement from "../VideoHeader/VideoHeaderElement.js";
import ChannelRow from "./ChannelRow.js";
import VideoRow from "./VideoRow.js";

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <div className="searchPage__elements">
          <VideoHeaderElement
            className="videoHeader__element"
            selected
            title="All"
          />
          <VideoHeaderElement className="videoHeader__element" title="Shorts" />
          <VideoHeaderElement className="videoHeader__element" title="Videos" />
          <VideoHeaderElement
            className="videoHeader__element"
            title="Unwatched"
          />
          <VideoHeaderElement
            className="videoHeader__element"
            title="Watched"
          />
          <VideoHeaderElement
            className="videoHeader__element"
            title="Recently Uploaded"
          />
          <VideoHeaderElement className="videoHeader__element" title="Live" />
          <VideoHeaderElement
            className="videoHeader__element"
            title="Playlists"
          />
        </div>

        <div className="searchPage__filter">
          <h2>Filters</h2>
          <TuneOutlinedIcon />
        </div>
      </div>

      <ChannelRow
        image="https://yt3.googleusercontent.com/ytc/AIdro_kotL-OQVXsay2vKRujBvNWcY47UZUwC-axNozc8Mzdutk=s160-c-k-c0x00ffffff-no-rj"
        channel="Clever Programmer"
        verified
        subs="1.31M"
        username="CleverProgrammer"
        description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the .."
      />

      <hr />

      <VideoRow
        image="https://i.ytimg.com/vi/pq41n2LYIp8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAfm1PgU3vnOoXBmajv5ySeOlig9Q"
        title="Insecurity is stopping you from becoming a better developer"
        views="2.2K"
        timestamp="3 days"
        logo="https://yt3.googleusercontent.com/ytc/AIdro_kotL-OQVXsay2vKRujBvNWcY47UZUwC-axNozc8Mzdutk=s160-c-k-c0x00ffffff-no-rj"
        channel="Clever Programmer"
        verified
        description="3 DAY FREE TRIAL to POPPY AI ..."
      />
      <VideoRow
        image="https://i.ytimg.com/vi/IJwLKLIR94Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCBFdH8Z-ZwxvOLOI6VpyqiStciJg"
        title="Is Freecodecamp Worth It? My Honest Reaction"
        views="4.5K"
        timestamp="2 weeks"
        logo="https://yt3.googleusercontent.com/ytc/AIdro_kotL-OQVXsay2vKRujBvNWcY47UZUwC-axNozc8Mzdutk=s160-c-k-c0x00ffffff-no-rj"
        channel="Clever Programmer"
        verified
        description="3 DAY FREE TRIAL to POPPY AI ..."
      />
      <VideoRow
        image="https://i.ytimg.com/vi/lI1ae4REbFM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDGQckVsUUFmdZOb4JZO4kJeJQc7Q"
        title="JavaScript Tutorial for Beginners - Full Course in 12 Hours (2022)"
        views="1.2M"
        timestamp="2 years"
        logo="https://yt3.googleusercontent.com/ytc/AIdro_kotL-OQVXsay2vKRujBvNWcY47UZUwC-axNozc8Mzdutk=s160-c-k-c0x00ffffff-no-rj"
        channel="Clever Programmer"
        verified
        description="We just created the Best Free JavaScript Programming Course on the planet Made with l..."
      />
      <VideoRow
        image="https://i.ytimg.com/vi/pnkuI8KXW_8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDVFScKEytwp4G7d1NAvTZ7ZkZjLg"
        title="🔴 Build a Spotify Clone with REACT JS for Beginners"
        views="457K"
        timestamp="Streamed 4 years"
        logo="https://yt3.googleusercontent.com/ytc/AIdro_kotL-OQVXsay2vKRujBvNWcY47UZUwC-axNozc8Mzdutk=s160-c-k-c0x00ffffff-no-rj"
        channel="Clever Programmer"
        verified
        description="In this FREE LIVE training, Qazi & Sonny will show you how to build a Spotify Clone with REACT JS . #reactjs #spotify ..."
      />
    </div>
  );
};

export default SearchPage;
