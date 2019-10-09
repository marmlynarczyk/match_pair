import React from "react";
/** @jsx jsx */ import { css, jsx, keyframes } from "@emotion/core";
import EnterName from "./EnterName";
import ChangeLevel from "./ChangeLevel";
import RetryLevel from "./RetryLevel";
import GameEnd from "./GameEnd";

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
  if (props.isLevelChange) {
    modalContent = (
      <ChangeLevel
        addScore={props.addScore}
        score={props.score}
        timeLeft={props.timeLeft}
        startNewLevel={props.startNewLevel}
      />
    );
  }
  if (props.isRetry) {
    modalContent = (
      <RetryLevel
        retryLevel={props.retryLevel}
        startNewGame={props.startNewGame}
      />
    );
  }
  if (props.isGameEnd) {
    modalContent = (
      <GameEnd score={props.score} playerName={props.playerName} startNewGame={props.startNewGame}></GameEnd>
    );
  }
  return (
    <div
      css={css`
        text-shadow: 0 0 1px #fff, 0 0 2px #0ff;
        font-family: arial;
        font-size: 2.1rem;
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
