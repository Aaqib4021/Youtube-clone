import React from "react";

const Comment = ({ data }) => {
  return (
    <div className="flex gap-4 m-4">
      <img
        className="w-12 h-12"
        src="https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg"
        alt="user"
      />
      <div>
        <h1>{data.name}</h1>
        <p>{data.text}</p>
      </div>
    </div>
  );
};

export default Comment;
