import React, { FC, PropsWithChildren } from "react";
import { MainViewArea } from "../dynamic-views/MainViewArea";
import { Prompt } from "../prompt/Prompt";
import "./MainViewAreaWrapper.css";

interface MainViewAreaWrapperProps extends PropsWithChildren { }

export const MainViewAreaWrapper: FC<MainViewAreaWrapperProps> = () => {
  return (
    <div id='chatBoxWrapper'>
      <MainViewArea />
      <Prompt />
    </div>
  );
};
