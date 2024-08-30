import React from "react";
import Comment from "./Comment";

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      {comment.replies && (
        <div className="ml-5 pl-5 ">
          <CommentList comments={comment?.replies?.comments} />
        </div>
      )}
    </div>
  ));
};

export default CommentList;
