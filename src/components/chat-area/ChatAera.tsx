import React, { FC, PropsWithChildren } from "react";
import "./ChatArea.css";

interface ChatAreaProps extends PropsWithChildren {}

export const ChatAera: FC<ChatAreaProps> = () => {
  return <div id='chatArea' className=""></div>;
};
