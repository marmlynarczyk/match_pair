import React from 'react';
/* eslint-disable */
/** @jsx jsx */ import { css, jsx, keyframes } from "@emotion/core";

function TextGlow (props){
    return <div css={css`color: white;
    font-size: 32px;
    font-family: arial;
    text-shadow: 0 0 1px #fff, 0 0 2px #fff, 0 0 3px #0ff;${props.myStyles||""}`}>{props.text} </div>
}
export default TextGlow;