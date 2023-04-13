import React, { FC, PropsWithChildren } from "react";
import { Logos } from "../../assets/images/svg/Logos";
import "./ChatArea.css";

interface ChatAreaProps extends PropsWithChildren { }

export const ChatAera: FC<ChatAreaProps> = () => {
  return (
    <div id='chatArea' className=''>
      <Logos isMainLogos={false} />
    </div>
  );
};
