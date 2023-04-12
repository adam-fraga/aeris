import React, { FC, PropsWithChildren } from "react";
import { ChatAera } from "../chat-area/ChatAera";
import { Prompt } from "../prompt/Prompt";
import "./ChatBoxWrapper.css";

interface ChatBoxWrapperProps extends PropsWithChildren {}

export const ChatBoxWrapper: FC<ChatBoxWrapperProps> = () => {
  return (
    <div id='chatBoxWrapper'>
      <ChatAera />
      <Prompt />
    </div>
  );
};
