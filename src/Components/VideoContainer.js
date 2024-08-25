import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../Utils/Constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const fetchVideos = async () => {
    const videos = await fetch(YOUTUBE_API);
    const data = await videos.json();
    setVideos(data.items);
  };
  useEffect(() => {
    fetchVideos();
  }, []);
  if (videos.length === 0) return;
  return (
    <div className="flex flex-wrap gap-8 mt-3 justify-center items-center">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
