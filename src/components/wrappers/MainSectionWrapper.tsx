import React from "react";
import "./MainSectionWrapper.css";
import { FC, PropsWithChildren } from "react";

export const MainSectionWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div id='mainSectionWrapper' className=''>
      Main Section Wrapper{children}
    </div>
  );
};
