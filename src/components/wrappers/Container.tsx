import React, { FC, PropsWithChildren } from "react";
import "./Container.css";

export const Container: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div id='container' className=''>
      {children}
    </div>
  );
};
