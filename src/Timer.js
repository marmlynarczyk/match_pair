import React from "react";
/* eslint-disable */
/** @jsx jsx */ import { css, jsx, keyframes } from "@emotion/core";

class Timer extends React.Component {
    constructor(props){
        super(props);
        this.state={
            width:248
        }
    }
    componentDidMount(){
        window.setTimeout(()=>this.setState({width:0}),10);
    }
  render() {
    return (
      <>
        <div
          css={css`
          width: 250px;
              
            border: 2px solid rgba(255,255,255,0.8);
            padding: 3px 3px;
            display:inline-block;
            border-radius: 10px;
            box-shadow:0 0 2px #fff,inset 0 0 2px #fff, 0 0 4px #0ff,inset 0 0 4px #0ff;
          `}
        >
          <div
            css={css`
              width: ${this.state.width}px;             
              box-shadow:0 0 2px #fff, 0 0 4px #0ff;
              height: 15px;
              background-color:rgba(255,255,255,0.95);
              border-radius: 10px; 
              transition: all linear ${this.props.time}s;             
            `}
          ></div>
        </div>
        
      </>
    );
  }
}
export default Timer;
