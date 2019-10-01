import React from "react";
import Timer from "./Timer.js";
import Score from "./Score.js";
import CurrentLevel from "./CurrentLevel";
/** @jsx jsx */ import { css, jsx, keyframes } from "@emotion/core";

function ScoreTimeBar(props) {
  return (
    <div
      css={css`
        color: #fff;
        text-shadow: 0 0 1px #fff, 0 0 2px #0ff;
        border-radius: 16px;
          background-color: rgba(8, 66, 150, 0.8);
          border: 1px solid #fff;
          box-shadow: 0 0 2px #fff, 0 0 4px #fff, inset 0 0 4px #fff,
            0 0 7px #fff, inset 0 0 7px #fff, 0 0 10px #0ff, inset 0 0 10px #0ff,
            0 0 12px #0ff, inset 0 0 12px #0ff;
            font-family:Arial;
            display:flex;
            width:500px;
            padding:20px 80px;
            justify-content:space-between;
            align-items:center;
      `}
    >
      <CurrentLevel currentLevel={props.currentLevel} />
      <Timer time={props.time} />
      <Score score={props.score} />
    </div>
  );
}
export default ScoreTimeBar;
