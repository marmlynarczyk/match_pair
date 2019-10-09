import React from 'react';
/* eslint-disable */
/** @jsx jsx */ import { css, jsx, keyframes } from "@emotion/core";
import './score.css';



class Score extends React.Component{
    constructor(props){
        super(props);
        this.addPointTimeout = null;
        this.subtractPointTimeout = null;
        this.myRef = React.createRef();
    }
    componentWillUnmount(){
        window.clearTimeout(this.addPointTimeout);
        window.clearTimeout(this.subtractPointTimeout);
    }
    componentDidUpdate(prevProps){
        
        if(prevProps.score<this.props.score){            
            this.myRef.current.classList.add('addPoint');
            this.addPointTimeout = window.setTimeout(()=>this.myRef.current.classList.remove('addPoint'),1500);
            return
        }        
        if(prevProps.score>this.props.score){
            this.myRef.current.classList.add('subtractPoint');
            this.subtractPointTimeout = window.setTimeout(()=>this.myRef.current.classList.remove('subtractPoint'),1500);
        }
    }
    render(){
        return <div css={css`color:white;`}> Punkty:<div ref={this.myRef} className={'points'} >{this.props.score}</div></div>
    }
}
export default Score;
