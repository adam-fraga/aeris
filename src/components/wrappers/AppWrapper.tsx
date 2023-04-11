import React, { FC, PropsWithChildren } from "react";
import "./AppWrapper.css";

export const AppWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div id='appWrapper' className=''>
      {children}
    </div>
  );
};
