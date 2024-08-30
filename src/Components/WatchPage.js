import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import { addmessage } from "../Utils/chatSlice";
import VideoContainer from "./VideoContainer";
const WatchPage = () => {
  const [id] = useSearchParams();
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const handleSidebar = () => {
    dispatch(closeMenu());
  };

  useEffect(() => {
    handleSidebar();
  }, []);

  const handleSendClick = () => {
    dispatch(addmessage({ name: "Aaqib", message: inputValue }));
    setInputValue("");
  };
  return (
    <div className="px-8 py-4 w-full flex">
      <div>
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
          {/* <div className="w-full">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <LiveChat />
            <div className="flex">
              <input
                type="text"
                placeholder="message"
                className="px-2 py-4 w-full ml-4 border border-gray-500 rounded-lg"
                value={inputValue}
                onChange={(e) => {
                  setInputValue(e.target.value);
                }}
              />
              <button
                className="px-2 bg-green-600 rounded-lg text-white font-semibold"
                onClick={handleSendClick}
              >
                Send
              </button>
            </div>
          </form>
        </div> */}
        </div>
        <CommentsContainer />
      </div>
      <div className="mt-[-40px]">
        <VideoContainer />
      </div>
    </div>
  );
};

export default WatchPage;
