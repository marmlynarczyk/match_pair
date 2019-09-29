import React from "react";
/* eslint-disable */
/** @jsx jsx */ import { css, jsx, keyframes } from "@emotion/core";
function EnterName(props) {

  
    let textShadow = css`text-shadow: 0 0 1px #fff, 0 0 2px #0ff;`;
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
          <div
            css={css`
              color: white;
              font-size: 32px;
              font-family: arial;
              text-shadow: 0 0 1px #fff, 0 0 2px #fff, 0 0 3px #0ff;
            `}
          >
            Podaj swoje imie:
          </div>
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
              width: 220px;
              color: #fff;
              font-size: 21px;
              font-family: arial;
              letter-spacing: 2px;
              text-align: center;
            `}
          ></input>
          <br />
          <button
            css={css`
              ${textShadow};
              margin-top: 20px;
              padding: 10px 45px;
              font-size: 20px;
              border-radius: 6px;
              background: rgba(0, 0, 0, 0);
              box-shadow: 0 0 1px #fff, inset 0 0 1px #fff, 0 0 2px #fff,
                inset 0 0 2px #fff, inset 0 0 6px #0ff, 0 0 6px #0ff;
              border: 1px solid white;

              color: #fff;
            `}
            onClick={e => {
              e.preventDefault();
              props.submitPlayerName(props.playerName);
            }}
          >
            Rozpocznij Grę
          </button>
        </form>
      </div>
    );
  }

export default EnterName;
