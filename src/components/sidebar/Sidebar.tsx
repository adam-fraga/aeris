import React from "react";
import "./Sidebar.css";
import { PropsWithChildren } from "react";

export const Sidebar = (props: PropsWithChildren) => {
  return (
    <div className='sidebarLayout'>
      <p>
        Sidebar
        {props.children}
      </p>
    </div>
  );
};
