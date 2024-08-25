import React from "react";
import CommentList from "./CommentList";

const CommentsContainer = () => {
  const commentData = [
    {
      name: "aaqib",
      text: "This is a very good video",
      replies: [
        {
          name: "aaqib",
          text: "This is a very good video",
          replies: [
            {
              name: "aaqib",
              text: "This is a very good video",
              replies: [],
            },
            {
              name: "aaqib",
              text: "This is a very good video",
              replies: [],
            },
          ],
        },
        {
          name: "aaqib",
          text: "This is a very good video",
          replies: [],
        },
      ],
    },
    {
      name: "aaqib",
      text: "This is a very good video",
      replies: [
        {
          name: "aaqib",
          text: "This is a very good video",
          replies: [],
        },
        {
          name: "aaqib",
          text: "This is a very good video",
          replies: [],
        },
      ],
    },
    {
      name: "aaqib",
      text: "This is a very good video",
      replies: [],
    },
    {
      name: "aaqib",
      text: "This is a very good video",
      replies: [
        {
          name: "aaqib",
          text: "This is a very good video",
          replies: [],
        },
        {
          name: "aaqib",
          text: "This is a very good video",
          replies: [],
        },
      ],
    },
    {
      name: "aaqib",
      text: "This is a very good video",
      replies: [],
    },
  ];
  return (
    <div className="p-4 m-4">
      <h1 className="font-bold text-xl">Comments:</h1>
      <CommentList comments={commentData} />
    </div>
  );
};

export default CommentsContainer;
