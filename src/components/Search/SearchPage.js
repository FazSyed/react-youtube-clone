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
        description="We just created the Best Free JavaScript Programming Course on the planet Made with lots of ❤️. Kickstart your Web ..."
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
      <VideoRow
        image="https://i.ytimg.com/vi/FNGoExJlLQY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA8FfDs2vQVtDdEZPI0LASbFb8r_A"
        title="HTML Crash Course for Absolute Beginners 2020 [Tutorial]"
        views="215K"
        timestamp="4 years"
        logo="https://yt3.googleusercontent.com/ytc/AIdro_kotL-OQVXsay2vKRujBvNWcY47UZUwC-axNozc8Mzdutk=s160-c-k-c0x00ffffff-no-rj"
        channel="Clever Programmer"
        verified
        description="TABLE OF CONTENTS... ENJOY 5:30 - HTML Header Tags 6:00 - HTML File 10:30 - Paragraph Tags 13:35 ..."
      />
      <VideoRow
        image="https://i.ytimg.com/vi/f7T48W0cwXM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBCKkoLkdh-GjL_E5jcWBGUPBG8QA"
        title="🔴 How to Build a Instagram Clone with REACT JS for Beginners (in 3 Hours!)"
        views="546K"
        timestamp="Streamed 4 years"
        logo="https://yt3.googleusercontent.com/ytc/AIdro_kotL-OQVXsay2vKRujBvNWcY47UZUwC-axNozc8Mzdutk=s160-c-k-c0x00ffffff-no-rj"
        channel="Clever Programmer"
        verified
        description="In this FREE LIVE training, Qazi and Sonny will show you how simple it is to create a full stack, INSTAGRA ..."
      />
      <VideoRow
        image="https://i.ytimg.com/vi/Ym6RYyRBPaA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAFQD4eoOszUgiKWJxdTo95Yyh-Xw"
        title="🔴 Build Modern Portfolio with NextJS, TypeScript, SSR, and React Bricks CMS"
        views="168K"
        timestamp="2 years"
        logo="https://yt3.googleusercontent.com/ytc/AIdro_kotL-OQVXsay2vKRujBvNWcY47UZUwC-axNozc8Mzdutk=s160-c-k-c0x00ffffff-no-rj"
        channel="Clever Programmer"
        verified
        description="Here's a modern portfolio you could have to impress an employer Build it with me & add your own ✨sa ..."
      />
      <VideoRow
        image="https://i.ytimg.com/vi/0mVbNp1ol_w/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA2EpGWB4EsWmk5fhbtYw-BZ28tvQ"
        title="ReactJS Tutorial for Beginners - Full Course in 20 Hours [2022]"
        views="529K"
        timestamp="2 years"
        logo="https://yt3.googleusercontent.com/ytc/AIdro_kotL-OQVXsay2vKRujBvNWcY47UZUwC-axNozc8Mzdutk=s160-c-k-c0x00ffffff-no-rj"
        channel="Clever Programmer"
        verified
        description="In this tutorial you're going to learn all about: Functional components in React JS Props and States in R ..."
      />
      <VideoRow
        image="https://i.ytimg.com/vi/-cMqr9HpZ-Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDQLOMEQB703FbgaDArfjEGamxbjQ"
        title="React JS Tutorial for Beginners - Full Course in 12 Hours [2021]"
        views="497K"
        timestamp="3 years"
        logo="https://yt3.googleusercontent.com/ytc/AIdro_kotL-OQVXsay2vKRujBvNWcY47UZUwC-axNozc8Mzdutk=s160-c-k-c0x00ffffff-no-rj"
        channel="Clever Programmer"
        verified
        description="Here is the best free React JS programming course on the planet. Made with lots of ❤️. Take your web ..."
      />
      <VideoRow
        image="https://i.ytimg.com/vi/KN6oBEOz2ZI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBNcVB6a02Xy2aafRBoUkHqDZyShA"
        title="CSS Crash Course for Absolute Beginners - Full Course"
        views="213K"
        timestamp="4 years"
        logo="https://yt3.googleusercontent.com/ytc/AIdro_kotL-OQVXsay2vKRujBvNWcY47UZUwC-axNozc8Mzdutk=s160-c-k-c0x00ffffff-no-rj"
        channel="Clever Programmer"
        verified
        description="TABLE OF CONTENTS... ENJOY 2:09 - What is CSS? 13:07 - The Best Framework for CSS / Front-End 47:1 ..."
      />
    </div>
  );
};

export default SearchPage;
