import React from "react";
import { PropsWithChildren } from "react";

export const Menu = (props: PropsWithChildren) => {
  return (
    <div>
      {props.children}
      Menu
    </div>
  );
};
