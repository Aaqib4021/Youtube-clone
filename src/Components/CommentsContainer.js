import React, { useEffect, useState } from "react";
import CommentList from "./CommentList";
import { GOOGLE_API_KEY } from "../Utils/Constants";
import { useSearchParams } from "react-router-dom";

const CommentsContainer = () => {
  const [id] = useSearchParams();
  const [fetchedComments, setfetchedComments] = useState([]);
  const fetchComments = async () => {
    const jsondata = await fetch(
      "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=500&videoId=" +
        id.get("v") +
        "&key=" +
        GOOGLE_API_KEY
    );
    const data = await jsondata.json();
    setfetchedComments(data.items);
  };
  useEffect(() => {
    fetchComments();
  }, []);
  return (
    <div className="p-4 m-4  w-[1200px] ">
      <h1 className="font-bold text-xl">Comments:</h1>
      <div className="flex my-8">
        <img
          src="https://yt3.ggpht.com/ytc/AIdro_n_nj07aHleN8uGZG87BGwCoiKn6frileWLuBTPGoV7SK3tUej0VFYnY4c8Qr2CsretaA=s48-c-k-c0x00ffffff-no-rj"
          alt="user"
          className="rounded-full ml-5 object-contain w-12 h-12"
        />
        <input
          type="text"
          placeholder="Add a comment"
          className=" ml-4 w-full py-2 pl-2  border-b focus:outline-none focus:ring-0"
        />
      </div>
      <CommentList comments={fetchedComments} />
    </div>
  );
};

export default CommentsContainer;
