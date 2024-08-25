import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [id] = useSearchParams();
  //   console.log(id.get("v"));
  const dispatch = useDispatch();
  const handleSidebar = () => {
    dispatch(closeMenu());
  };
  useEffect(() => {
    handleSidebar();
  }, []);

  return (
    <div className="px-8 py-2 w-full ">
      <div className="flex">
        <div>
          <iframe
            className="rounded-2xl"
            width="1200"
            height="600"
            src={
              "https://www.youtube.com/embed/" +
              id.get("v") +
              "?autoplay=1&mute=1"
            }
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
