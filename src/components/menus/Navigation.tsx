import React, { PropsWithChildren, FC } from "react";
import { SvgArrows } from "../../assets/images/svg/SvgArrows";
import { SvgBracketsCurly } from "../../assets/images/svg/SvgBracketsCurly";
import { SvgCommentAltEdit } from "../../assets/images/svg/SvgCommentAltEdit";
import { SvgCommentAltLines } from "../../assets/images/svg/SvgCommentAltLines";
import { SvgHome } from "../../assets/images/svg/SvgHome";
import { SvgImage } from "../../assets/images/svg/SvgImage";
import { SvgTool } from "../../assets/images/svg/SvgTool";
import "./Navigation.css";

interface NavigationProps extends PropsWithChildren {
  rowLayout: boolean;
}

export const Navigation: FC<NavigationProps> = ({ rowLayout }) => {
  return (
    <>
      {!rowLayout && (
        <nav id='navSidebar'>
          <SvgHome />
          <SvgCommentAltEdit />
          <SvgCommentAltLines />
          <SvgImage />
          <SvgBracketsCurly />
          <SvgTool />
        </nav>
      )}

      {rowLayout && (
        <nav id='navHeader'>
          <a href=''>Other</a>
          <a href=''>Menu</a>
          <a href=''>For</a>
          <a href=''>Whatever</a>
        </nav>
      )}
    </>
  );
};
