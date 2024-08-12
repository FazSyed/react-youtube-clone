import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import PortraitIcon from "@mui/icons-material/Portrait";
import HistoryIcon from "@mui/icons-material/History";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import SlideshowOutlinedIcon from "@mui/icons-material/SlideshowOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Passing Components into Components --> Here Icon is a Component inside SidebarRow Component */}
      <SidebarRow selected title="Home" Icon={HomeOutlinedIcon} />
      <SidebarRow title="Trending" Icon={WhatshotIcon} />
      <SidebarRow title="Subscriptions" Icon={SubscriptionsOutlinedIcon} />

      <hr />

      <div className="sidebar__you">
        <p>You</p>
        <KeyboardArrowRightIcon className="sidebar__rightArrow" />
      </div>

      <SidebarRow title="Your Channel" Icon={PortraitIcon} />
      <SidebarRow title="History" Icon={HistoryIcon} />
      <SidebarRow title="Playlists" Icon={PlaylistPlayIcon} />
      <SidebarRow title="Your videos" Icon={SlideshowOutlinedIcon} />
      <SidebarRow title="Watch later" Icon={WatchLaterOutlinedIcon} />
      <SidebarRow title="Liked videos" Icon={ThumbUpOutlinedIcon} />

      <hr />

      <p className="sidebar__subscriptionTitle">Subscriptions</p>
      <SidebarRow
        title="Bro Code"
        src="https://yt3.googleusercontent.com/ytc/AIdro_mPFVsxROj1dOtTWc9iNBwDYV4z42Q8LPokBSewiW9pCSg=s160-c-k-c0x00ffffff-no-rj"
      />
      <SidebarRow
        title="Clever Programmer"
        src="https://yt3.googleusercontent.com/ytc/AIdro_kotL-OQVXsay2vKRujBvNWcY47UZUwC-axNozc8Mzdutk=s160-c-k-c0x00ffffff-no-rj"
      />
      <SidebarRow
        title="Network Chuck"
        src="https://yt3.googleusercontent.com/ytc/AIdro_mSw0rri2VsHv7XyXcMv931baO8QUfqIMFEGHx-7xumLG0=s160-c-k-c0x00ffffff-no-rj"
      />
      <SidebarRow
        title="Mrwhosetheboss"
        src="https://yt3.googleusercontent.com/enyLBm1Sy8mVRXJJLWHT2z64nqxJGt2g61A9xnxpUjO2YAUovHaY_JT3rnAg0j6Qij9iaHQlAg=s160-c-k-c0x00ffffff-no-rj"
      />
      <SidebarRow
        title="SuperSimpleDev"
        src="https://yt3.googleusercontent.com/ytc/AIdro_laf9dDyNATE1_RdVUKthwnwT9TSm9N0my0jL2H8gCvjw=s160-c-k-c0x00ffffff-no-rj"
      />
      <SidebarRow
        title="freeCodeCamp.org"
        src="https://yt3.googleusercontent.com/ytc/AIdro_lGRc-05M2OoE1ejQdxeFhyP7OkJg9h4Y-7CK_5je3QqFI=s160-c-k-c0x00ffffff-no-rj"
      />

      <SidebarRow
        title="Traversy Media"
        src="https://yt3.googleusercontent.com/ytc/AIdro_mLysKc36lc_FVk2j777olWvLOjgDz6NCNGdiQBnAKRENM=s160-c-k-c0x00ffffff-no-rj"
      />
      <SidebarRow title="Show More" Icon={ExpandMoreIcon} />
    </div>
  );
};

export default Sidebar;
