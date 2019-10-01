import React from 'react';
/** @jsx jsx */ import { css, jsx, keyframes } from "@emotion/core";

class ChangeLevel extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            timeLeft:this.props.timeLeft,
            score:this.props.score
        }
    }
    componentDidMount(){
        let interval = window.setInterval(()=>{
            if(this.state.timeLeft>0){
                this.setState((prevState)=>{
                    return {timeLeft:prevState.timeLeft-1,score:prevState.score+100}
                })

            }else{
                window.clearInterval(interval);
                this.props.addScore(this.state.score-this.props.score)
            }      

        },50)
    }
    render(){
return <div css={css`padding:40px 40px;`}>
    <div>timeLeft {this.state.timeLeft}</div>
    <div> score {this.state.score }</div>
    <button disabled={this.state.timeLeft>0?true:false} onClick={this.props.startNewLevel} >Następny Poziom</button>
    </div>
    }
}
export default ChangeLevel;