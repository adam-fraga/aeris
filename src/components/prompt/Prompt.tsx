import React, { MouseEventHandler } from "react";
import { SvgSend } from "../../assets/images/svg/SvgSend";
import "./Prompt.css";

const handleSubmit = (e: any) => {};

export const Prompt = () => {
  return (
    <div id='prompt'>
      <form action=''>
        <div id='chatInputWrapper'>
          <label htmlFor='chatInput' />
          <textarea
            name='chatInput'
            id='chatInput'
            cols={100}
            rows={3}
            autoFocus
          />
          <SvgSend />
        </div>
      </form>
    </div>
  );
};
