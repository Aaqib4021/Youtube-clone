import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="mt-4 flex items-center gap-2">
      <img
        className="rounded-full w-10 h-10"
        src="https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg"
        alt="user"
      />

      <span className=" text-gray-400">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
