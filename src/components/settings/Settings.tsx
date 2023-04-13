import React, { FC, PropsWithChildren } from "react";
interface SerringsProps extends PropsWithChildren {}
import "./Settings.css";

interface SettingsProps extends PropsWithChildren {}

export const Settings: FC<SettingsProps> = ({ children }) => {
  return <div id='settings'></div>;
};
