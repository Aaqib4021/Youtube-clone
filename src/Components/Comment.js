import React from "react";

const Comment = ({ data }) => {
  //   console.log(data);
  const { authorDisplayName, textOriginal, authorProfileImageUrl } =
    data?.snippet?.topLevelComment?.snippet || data?.snippet;
  return (
    <div className="flex gap-4 m-4">
      <img
        className="w-12 h-12 rounded-full"
        src={authorProfileImageUrl}
        alt="user"
      />
      <div>
        <h1>{authorDisplayName}</h1>
        <p>{textOriginal}</p>
      </div>
    </div>
  );
};

export default Comment;
