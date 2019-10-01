import React from "react";
import Button from "./Button"
/* eslint-disable */
/** @jsx jsx */ import { css, jsx, keyframes } from "@emotion/core";
import TextGlow from "./TextGlow"


function RetryLevel (props){
    let buttonStyle = `display:block;width:300px;`
    return (
        <div css={css`padding:70px 70px;`}>
            <TextGlow text={"Niestety twój czas się skończył"} myStyle={"padding-bottom:10px"}/>
            <Button text={"Spróbój ponownie"} eventListener={props.retryLevel} myStyles={buttonStyle}/>
            <Button text={"Zacznij od początku"} eventListener={props.startNewGame} myStyles={buttonStyle}/>            
        </div>
    )
}
export default RetryLevel;