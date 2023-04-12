import React, { FC, PropsWithChildren } from "react";
import { ChatAera } from "../chat-area/ChatAera";
import { Prompt } from "../prompt/Prompt";

interface ChatBoxWrapperProps extends PropsWithChildren {}

export const ChatBoxWrapper: FC<ChatBoxWrapperProps> = () => {
  return (
    <div>
      <ChatAera />
      <Prompt />
    </div>
  );
};
