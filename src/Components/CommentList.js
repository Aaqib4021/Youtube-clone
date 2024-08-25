import React from "react";
import Comment from "./Comment";

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment key={index} data={comment} />
      <div className="ml-5 pl-5">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

export default CommentList;
