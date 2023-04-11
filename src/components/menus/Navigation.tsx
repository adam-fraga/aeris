import React, { PropsWithChildren, FC } from "react";

interface NavigationProps extends PropsWithChildren {
  rowLayout: boolean;
}

export const Navigation: FC<NavigationProps> = ({ rowLayout }) => {
  return <nav id={rowLayout ? "navigation" : "colNavigation"}></nav>;
};
