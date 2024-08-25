import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addmessage } from "../Utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../Utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const messages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    setInterval(() => {
      dispatch(
        addmessage({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        })
      );
    }, 500);
  }, []);
  return (
    <div className="border border-gray-300 h-[600px] ml-4   px-4 py-2 rounded-lg bg-slate-100 overflow-y-scroll overflow-x-hidden flex flex-col-reverse">
      {/* <h1 className="text-lg font-semibold">Live chat</h1> */}
      {messages.map((c, index) => (
        <ChatMessage key={index} name={c.name} message={c.message} />
      ))}
    </div>
  );
};

export default LiveChat;
