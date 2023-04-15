import React from "react";
import { SvgBill } from "../../assets/images/svg/SvgBill";
import SvgDashboard from "../../assets/images/svg/SvgDashboard";
import { SvgUser } from "../../assets/images/svg/SvgUser";
import "./UserPortal.css";
import DarkThemeButton from "../buttons/DarkThemeButton";

export const UserPortal = (props: {}) => {
  return (
    <div id='userPortal'>
      <DarkThemeButton />
      <SvgDashboard />
      <SvgBill />
      <SvgUser />
    </div>
  );
};
