import React from "react";
import { FC, PropsWithChildren } from "react";
import "./MenuWrapper.css";

interface MenuProps extends PropsWithChildren {
  children: React.ReactNode;
  rowLayout: boolean;
}

export const MenuWrapper: FC<MenuProps> = ({ children, rowLayout }) => {
  return (
    <div className={rowLayout ? "wrapperMenuHeader" : "wrapperMenuSidebar"}>
      {children}
    </div>
  );
};
