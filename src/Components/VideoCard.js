import React from "react";
import { useSelector } from "react-redux";

const VideoCard = ({ info }) => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails } = snippet;

  return (
    <div>
      <div
        className={`  my-5 rounded-xl p-2 cursor-pointer ${
          isMenuOpen ? "max-w-[22rem]" : "max-w-80"
        }`}
      >
        <img
          src={thumbnails.medium.url}
          alt="Thumbnail"
          className="rounded-xl"
        />
        <h1 className="font-semibold text-lg my-2 ">{title}</h1>
        <h3 className="text-gray-600">{channelTitle}</h3>
        <h3 className="text-gray-600">{statistics.viewCount} Views</h3>
      </div>
    </div>
  );
};

export default VideoCard;
