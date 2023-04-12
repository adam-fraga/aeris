import React, { FC, PropsWithChildren } from "react";

interface ChatAreaProps extends PropsWithChildren {}

export const ChatAera: FC<ChatAreaProps> = () => {
  return <div className='chatBoxArea'>ChatBOX</div>;
};
