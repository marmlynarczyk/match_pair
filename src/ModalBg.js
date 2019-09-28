import React from "react";
/** @jsx jsx */ import { css, jsx, keyframes } from "@emotion/core";
import EnterName from "./EnterName";

function ModalBg(props) {
  let modalContent;
  if (props.isStart) {
    modalContent = (
      <EnterName
        submitPlayerName={props.submitPlayerName}
        playerName={props.playerName}
        hadlePlayerNameChange={props.hadlePlayerNameChange}
      />
    );
  }
  return (
    <div
      css={css`
        text-shadow: 0 0 1px #fff, 0 0 2px #0ff;
        color: white;
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(8, 66, 150, 0.8);
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 16px;
          background-color: rgba(8, 66, 150, 0.8);
          border: 5px solid #fff;
          box-shadow: 0 0 2px #fff, 0 0 4px #fff, inset 0 0 4px #fff,
            0 0 7px #fff, inset 0 0 7px #fff, 0 0 10px #0ff, inset 0 0 10px #0ff,
            0 0 12px #0ff, inset 0 0 12px #0ff;
        `}
      >
        {modalContent}
      </div>
    </div>
  );
}

export default ModalBg;
