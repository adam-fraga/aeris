import React, { FC, PropsWithChildren } from "react";
import { Logos } from "../../assets/images/svg/Logos";
import "./MainViewArea.css";

interface MainViewAreaProps extends PropsWithChildren { }

export const MainViewArea: FC<MainViewAreaProps> = () => {
  return <div id='mainViewArea' className=''></div>;
};
