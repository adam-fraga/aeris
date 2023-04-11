import React, { useState } from "react";
import "./Header.css";
import { PropsWithChildren } from "react";

const headerMenu = [];
export const Header = (props: PropsWithChildren) => {
  return (
    <header id="header"className=''>
      Header
      {props.children}
    </header>
  );
};
