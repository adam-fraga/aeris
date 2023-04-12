import React from "react";
import "./Sidebar.css";
import { PropsWithChildren } from "react";
import { Logos } from "../../assets/images/svg/Logos";

export const Sidebar = (props: PropsWithChildren) => {
  return (
    <div className='sidebarLayout'>
      <Logos />
      {props.children}
    </div>
  );
};
