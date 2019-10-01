import React from "react";
import Button from "./Button";
import TextGlow from './TextGlow'
/* eslint-disable */
/** @jsx jsx */ import { css, jsx, keyframes } from "@emotion/core";

function EnterName(props) {
  let buttonEV = event => {    
    event.preventDefault();
    props.submitPlayerName(props.playerName);
  };

  let textShadow = css`
    text-shadow: 0 0 1px #fff, 0 0 2px #0ff;
  `;
  return (
    <div
      css={css`
        padding: 140px 100px;
      `}
    >
      <form
        css={css`
          text-align: center;
        `}
      >
        <TextGlow text={"Podaj Swoje Imię"}/>
        <input
          value={props.playerName}
          onChange={props.hadlePlayerNameChange}
          css={css`
            ${textShadow}

            margin-top:10px;
            box-shadow: 0 0 1px #fff, inset 0 0 1px #fff, 0 0 2px #fff,
              inset 0 0 2px #fff, inset 0 0 6px #0ff, 0 0 6px #0ff;
            border: 1px solid #fff;
            background-color: rgba(0, 0, 0, 0);
            height: 40px;
            width: 230px;
            color: #fff;
            font-size: 21px;
            font-family: arial;
            letter-spacing: 2px;
            text-align: center;
            border-radius:6px;
          `}
        ></input>
        <br />
        <Button eventListener={buttonEV} text={"Rozpocznij Grę"} myStyles="width:230px;"/>
      </form>
    </div>
  );
}

export default EnterName;
