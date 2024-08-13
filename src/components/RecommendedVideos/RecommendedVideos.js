import React from "react";
import "./RecommendedVideos.css";
import VideoHeader from "../VideoHeader/VideoHeader";
import VideoCard from "./VideoCard";

const RecommendedVideos = () => {
  return (
    <div className="recommended">
      <div className="recommended__header">
        <VideoHeader />
      </div>

      <div className="recommendedVideos">
        <div className="recommendedVideos__videos">
          <VideoCard
            image="https://i.ytimg.com/vi/XKHEtdqhLK8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDizEdWKjNjnKLKinpi5PgcEiC2Iw"
            channelImage="https://yt3.googleusercontent.com/ytc/AIdro_mPFVsxROj1dOtTWc9iNBwDYV4z42Q8LPokBSewiW9pCSg=s160-c-k-c0x00ffffff-no-rj"
            title="Python Full Course for free 🐍"
            channel="Bro Code"
            views="18M views"
            timestamp="3 years ago"
          />
          <VideoCard
            image="https://i.ytimg.com/vi/Qqx_wzMmFeA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAq2qi6wP4YAvMCx77NhlhQkhHfhQ"
            channelImage="https://yt3.googleusercontent.com/ytc/AIdro_kotL-OQVXsay2vKRujBvNWcY47UZUwC-axNozc8Mzdutk=s160-c-k-c0x00ffffff-no-rj"
            title="JavaScript Tutorial for Beginners - Full Course in 8 Hours [2020]"
            channel="Clever Programmer"
            views="2.8M views"
            timestamp="4 years ago"
          />
          <VideoCard
            image="https://i.ytimg.com/vi/wX75Z-4MEoM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCMIDUvu7hNdiVL5AFDd2-UF_JmgQ"
            channelImage="https://yt3.googleusercontent.com/ytc/AIdro_mSw0rri2VsHv7XyXcMv931baO8QUfqIMFEGHx-7xumLG0=s160-c-k-c0x00ffffff-no-rj"
            title="you need to learn Virtual Machines RIGHT NOW!! (Kali Linux VM, Ubuntu, Windows)"
            channel="NetworkChuck"
            views="9.2M views"
            timestamp="3 years ago"
          />
          <VideoCard
            image="https://i.ytimg.com/vi/syB1ezRvKpU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDK2pj9pvF3W7xhAZ3Hgjt20jpm_A"
            channelImage="https://yt3.googleusercontent.com/enyLBm1Sy8mVRXJJLWHT2z64nqxJGt2g61A9xnxpUjO2YAUovHaY_JT3rnAg0j6Qij9iaHQlAg=s160-c-k-c0x00ffffff-no-rj"
            title="I bought the SMALLEST Tech in the world."
            channel="Mrwhosetheboss"
            views="24M views"
            timestamp="3 years ago"
          />
          <VideoCard
            image="https://i.ytimg.com/vi/G3e-cpL7ofc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD09tDWVYMCVYXLIfsdnHOs_FY8xA"
            channelImage="https://yt3.googleusercontent.com/ytc/AIdro_laf9dDyNATE1_RdVUKthwnwT9TSm9N0my0jL2H8gCvjw=s160-c-k-c0x00ffffff-no-rj"
            title="HTML & CSS Full Course - Beginner to Pro"
            channel="SuperSimpleDev"
            views="11M views"
            timestamp="2 years ago"
          />
          <VideoCard
            image="https://i.ytimg.com/vi/rfscVS0vtbw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC79PW0xn9VXX8BWq0CwJI5P6d5TQ"
            channelImage="https://yt3.googleusercontent.com/ytc/AIdro_lGRc-05M2OoE1ejQdxeFhyP7OkJg9h4Y-7CK_5je3QqFI=s160-c-k-c0x00ffffff-no-rj"
            title="Learn Python - Full Course for Beginners [Tutorial]"
            channel="freecodecamp.org"
            views="44M views"
            timestamp="6 years ago"
          />
          <VideoCard
            image="https://i.ytimg.com/vi/w7ejDZ8SWv8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD40MhqPdolZSsPNtX-r3g3mdmbyg"
            channelImage="https://yt3.googleusercontent.com/ytc/AIdro_mLysKc36lc_FVk2j777olWvLOjgDz6NCNGdiQBnAKRENM=s160-c-k-c0x00ffffff-no-rj"
            title="React JS Crash Course"
            channel="Traversy Media"
            views="3.4M views"
            timestamp="3 years ago"
          />
          <VideoCard
            image="https://i.ytimg.com/vi/7YWTtCsvgvg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAT-KJKKF2_UhMLpXmoQt1BxHdwYg"
            channelImage="https://yt3.googleusercontent.com/enyLBm1Sy8mVRXJJLWHT2z64nqxJGt2g61A9xnxpUjO2YAUovHaY_JT3rnAg0j6Qij9iaHQlAg=s160-c-k-c0x00ffffff-no-rj"
            title="Turn your Smartphone into a 3D Hologram | 4K"
            channel="Mrwhosetheboss"
            views="25M views"
            timestamp="9 years ago"
          />
          <VideoCard
            image="https://i.ytimg.com/vi/EerdGm-ehJQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCaIj_mKmBRG2Q60iyoKb6f47r6YA"
            channelImage="https://yt3.googleusercontent.com/ytc/AIdro_laf9dDyNATE1_RdVUKthwnwT9TSm9N0my0jL2H8gCvjw=s160-c-k-c0x00ffffff-no-rj"
            title="JavaScript Tutorial Full Course - Beginner to Pro (2024)"
            channel="SuperSimpleDev"
            views="1.3M views"
            timestamp="3 months ago"
          />
          {/* --------------------------------------------------------------------------------------------------------------------------- */}
          <VideoCard
            image="https://i.ytimg.com/vi/XKHEtdqhLK8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDizEdWKjNjnKLKinpi5PgcEiC2Iw"
            channelImage="https://yt3.googleusercontent.com/ytc/AIdro_mPFVsxROj1dOtTWc9iNBwDYV4z42Q8LPokBSewiW9pCSg=s160-c-k-c0x00ffffff-no-rj"
            title="Python Full Course for free 🐍"
            channel="Bro Code"
            views="18M views"
            timestamp="3 years ago"
          />
          <VideoCard
            image="https://i.ytimg.com/vi/Qqx_wzMmFeA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAq2qi6wP4YAvMCx77NhlhQkhHfhQ"
            channelImage="https://yt3.googleusercontent.com/ytc/AIdro_kotL-OQVXsay2vKRujBvNWcY47UZUwC-axNozc8Mzdutk=s160-c-k-c0x00ffffff-no-rj"
            title="JavaScript Tutorial for Beginners - Full Course in 8 Hours [2020]"
            channel="Clever Programmer"
            views="2.8M views"
            timestamp="4 years ago"
          />
          <VideoCard
            image="https://i.ytimg.com/vi/wX75Z-4MEoM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCMIDUvu7hNdiVL5AFDd2-UF_JmgQ"
            channelImage="https://yt3.googleusercontent.com/ytc/AIdro_mSw0rri2VsHv7XyXcMv931baO8QUfqIMFEGHx-7xumLG0=s160-c-k-c0x00ffffff-no-rj"
            title="you need to learn Virtual Machines RIGHT NOW!! (Kali Linux VM, Ubuntu, Windows)"
            channel="NetworkChuck"
            views="9.2M views"
            timestamp="3 years ago"
          />
          <VideoCard
            image="https://i.ytimg.com/vi/syB1ezRvKpU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDK2pj9pvF3W7xhAZ3Hgjt20jpm_A"
            channelImage="https://yt3.googleusercontent.com/enyLBm1Sy8mVRXJJLWHT2z64nqxJGt2g61A9xnxpUjO2YAUovHaY_JT3rnAg0j6Qij9iaHQlAg=s160-c-k-c0x00ffffff-no-rj"
            title="I bought the SMALLEST Tech in the world."
            channel="Mrwhosetheboss"
            views="24M views"
            timestamp="3 years ago"
          />
          <VideoCard
            image="https://i.ytimg.com/vi/G3e-cpL7ofc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD09tDWVYMCVYXLIfsdnHOs_FY8xA"
            channelImage="https://yt3.googleusercontent.com/ytc/AIdro_laf9dDyNATE1_RdVUKthwnwT9TSm9N0my0jL2H8gCvjw=s160-c-k-c0x00ffffff-no-rj"
            title="HTML & CSS Full Course - Beginner to Pro"
            channel="SuperSimpleDev"
            views="11M views"
            timestamp="2 years ago"
          />
          <VideoCard
            image="https://i.ytimg.com/vi/rfscVS0vtbw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC79PW0xn9VXX8BWq0CwJI5P6d5TQ"
            channelImage="https://yt3.googleusercontent.com/ytc/AIdro_lGRc-05M2OoE1ejQdxeFhyP7OkJg9h4Y-7CK_5je3QqFI=s160-c-k-c0x00ffffff-no-rj"
            title="Learn Python - Full Course for Beginners [Tutorial]"
            channel="freecodecamp.org"
            views="44M views"
            timestamp="6 years ago"
          />
          <VideoCard
            image="https://i.ytimg.com/vi/w7ejDZ8SWv8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD40MhqPdolZSsPNtX-r3g3mdmbyg"
            channelImage="https://yt3.googleusercontent.com/ytc/AIdro_mLysKc36lc_FVk2j777olWvLOjgDz6NCNGdiQBnAKRENM=s160-c-k-c0x00ffffff-no-rj"
            title="React JS Crash Course"
            channel="Traversy Media"
            views="3.4M views"
            timestamp="3 years ago"
          />
          <VideoCard
            image="https://i.ytimg.com/vi/7YWTtCsvgvg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAT-KJKKF2_UhMLpXmoQt1BxHdwYg"
            channelImage="https://yt3.googleusercontent.com/enyLBm1Sy8mVRXJJLWHT2z64nqxJGt2g61A9xnxpUjO2YAUovHaY_JT3rnAg0j6Qij9iaHQlAg=s160-c-k-c0x00ffffff-no-rj"
            title="Turn your Smartphone into a 3D Hologram | 4K"
            channel="Mrwhosetheboss"
            views="25M views"
            timestamp="9 years ago"
          />
          <VideoCard
            image="https://i.ytimg.com/vi/EerdGm-ehJQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCaIj_mKmBRG2Q60iyoKb6f47r6YA"
            channelImage="https://yt3.googleusercontent.com/ytc/AIdro_laf9dDyNATE1_RdVUKthwnwT9TSm9N0my0jL2H8gCvjw=s160-c-k-c0x00ffffff-no-rj"
            title="JavaScript Tutorial Full Course - Beginner to Pro (2024)"
            channel="SuperSimpleDev"
            views="1.3M views"
            timestamp="3 months ago"
          />
        </div>
      </div>
    </div>
  );
};

export default RecommendedVideos;
