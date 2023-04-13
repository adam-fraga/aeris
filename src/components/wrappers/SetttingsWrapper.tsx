import React, { FC, PropsWithChildren } from "react";
import "./SettingsWrapper.css";
interface SettingsWrapperProps extends PropsWithChildren {}

export const SetttingsWrapper: FC<SettingsWrapperProps> = ({ children }) => {
  return <div id='settingsWrapper'>{children}</div>;
};
