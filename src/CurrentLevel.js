import React from 'react';
/** @jsx jsx */ import { css, jsx } from "@emotion/core";

function CurrentLevel(props){
    return<div>Poziom:<span css={css`padding-left:7px;`}>{props.currentLevel+1}</span></div>
}
export default CurrentLevel;