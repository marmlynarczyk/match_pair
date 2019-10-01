import React from 'react';
/* eslint-disable */
/** @jsx jsx */ import { css, jsx, keyframes } from "@emotion/core";

function GlowButton (props){
    return <button onClick={props.eventListener} css={css`margin-top: 20px;
    padding: 10px 45px;
    font-size: 20px;
    border-radius: 6px;
    background: rgba(0, 0, 0, 0);
    box-shadow: 0 0 1px #fff, inset 0 0 1px #fff, 0 0 2px #fff,
      inset 0 0 2px #fff, inset 0 0 6px #0ff, 0 0 6px #0ff;
    border: 1px solid white;
    margin-left:auto;
    margin-right:auto;
    color: #fff;text-shadow: 0 0 1px #fff, 0 0 2px #0ff;${props.myStyles||""}`}>{props.text}</button>
}

export default GlowButton;