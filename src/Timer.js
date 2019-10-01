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
              height: 15px;
            border: 2px solid yellow;
            padding: 3px 3px;
            display:inline-block;
            border-radius: 10px;
          `}
        >
          <div
            css={css`
              width: ${this.state.width}px;
              height: 15px;
              background-color: red;
              border-radius: 10px; 
              transition: all linear ${this.props.time}s;             
            `}
          ></div>
        </div>
        Time:{this.props.time}
      </>
    );
  }
}
export default Timer;
