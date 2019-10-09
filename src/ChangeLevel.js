import React from "react";
import Button from "./Button";
/** @jsx jsx */ import { css, jsx, keyframes } from "@emotion/core";

const animationTest = keyframes`
0%{transform: scale(1);
    text-shadow: 0 0 1px #fff, 0 0 2px #0ff;
}
50%{transform: scale(1.2);
    text-shadow: 0 0 4px #fff, 0 0 8px #0ff;
}
100%{transform: scale(1);
    text-shadow: 0 0 1px #fff, 0 0 2px #0ff;
}

 
`;

class ChangeLevel extends React.Component {
  constructor(props) {
    super(props);
    this.animationDuration = 0.15;
    this.animationCount = this.props.score / 100 - 1;
    this.state = {
      timeLeft: this.props.timeLeft,
      score: this.props.score
    };
  }
  componentDidMount() {
    let interval = window.setInterval(() => {
      if (this.state.timeLeft > 0) {
        this.setState(prevState => {
          return {
            timeLeft: prevState.timeLeft - 1,
            score: prevState.score + 100
          };
        });
      } else {
        window.clearInterval(interval);
        this.props.addScore(this.state.score - this.props.score);
      }
    }, this.animationDuration * 1000);
  }
  render() {    
    return (
      <div
        css={css`
          padding: 150px 120px;
          font-size: 3rem;
        `}
      >
        <div
          css={css`
            margin-bottom: 20px;
          `}
        >
          {" "}
          Czas:{" "}
          <span
            css={css`
              margin-left: 5px;
              animation: ${animationTest} ${this.animationDuration}s linear
                ${this.props.timeLeft + 1};
              position: absolute;
            `}
          >
            {" "}
            {this.state.timeLeft}
          </span>
        </div>
        <div>
          {" "}
          Punkty:{" "}
          <span
            css={css`
              margin-left: 5px;
              animation: ${animationTest} ${this.animationDuration}s linear
                ${this.props.timeLeft + 1};
              position: absolute;
            `}
          >
            {this.state.score}
          </span>
        </div>
        <Button
          isDisabled={this.state.timeLeft > 0 ? true : false}
          eventListener={this.props.startNewLevel}
          text={"Następny Poziom"}
        ></Button>
      </div>
    );
  }
}
export default ChangeLevel;
