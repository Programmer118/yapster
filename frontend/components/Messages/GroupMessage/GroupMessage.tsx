'use client'
import { useAuthContext } from "@/context/useAuthContext";
import { extractTime } from "@/helper/extractTime";
import { MessageType } from "@/types/messagesType";
import React from "react";

const GroupMessage = ({message}:{message:MessageType}) => {
  const {authUser} = useAuthContext()
  const fromMe = message.senderId === authUser?.user?.id
  return (
    <div>
      <div className={`chat ${fromMe?'chat-end':'chat-start'}`}>
        <div className="chat-image avatar">
         {
          !fromMe &&  <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src={message.sender?.avatar}
          />
        </div>
         }
        </div>
        {
          !fromMe && <div className="chat-header">{message.sender?.username}</div>
        }
        <div className="chat-bubble pb-4 ">{message.text}<time className={`absolute  tracking-tight bottom-0 ${fromMe?' right-2':'left-2'} text-[0.7rem] opacity-50  text-gray-400`}>{extractTime(message.createdAt)}</time></div>
        <div className="chat-footer opacity-50">seen</div>
      </div>
    </div>
  );
};

export default GroupMessage;
