import React from "react";
/* eslint-disable */
/** @jsx jsx */ import { css, jsx, keyframes } from "@emotion/core";
import Button from './Button'

function GameEnd(props) {
  let scores = localStorage.getItem('scores');
  if (scores) {
    scores = JSON.parse(scores);
  } else {
    scores = { data: [{ name:'unnamed',score:50 }, { name:'unnamed',score:2 }, { name:'unnamed',score:1 }] };
  }
  if(props.score>scores.data[2].score){
      scores.data.push({name:props.playerName,score:props.score})
      scores.data = scores.data.sort((x,y)=>y.score-x.score)
      scores.data.pop()
  }
  localStorage.setItem('scores',JSON.stringify(scores))
  
  return (
    <div
      css={css`
        text-align: center;
        padding: 140px 100px;
        font-size: 30px;
      `}
    >
      <p >
        Gratulacje {props.playerName} !
        <br />
        Ukonczyłeś grę z wynikiem {props.score} punktów.
      </p>
      <div css={css`background:white;height:1px;
      box-shadow: 0 0 2px #fff, 0 0 4px #fff, 
      0 0 7px #fff,  0 0 10px #0ff, 
      0 0 12px #0ff;margin-top:5px;margin-bottom:5px;
      `}></div>
      <div>
          <p css={css`padding-top:15px;padding-bottom:5px;`}>Lista najlepszych wyników:</p>
          
          <div css={css`display:inline-block;`}>
          <ul css={css`list-style-type:none;text-align:left; `}>             
              {scores.data.sort((data1,data2)=>data2.score-data1.score).map((data,index)=><li key={index}>{data.score} : {data.name}</li>)}
          </ul></div>
      </div>
      <Button text={"Zacznij od początku"} eventListener={props.startNewGame} myStyles={css`margin-top:50px;padding:10px 40px;font-size:2.2rem;`}/>  
    </div>
  );
}
export default GameEnd;
