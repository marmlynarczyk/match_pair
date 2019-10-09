import React from 'react';
/* eslint-disable */
/** @jsx jsx */ import { css, jsx, keyframes } from "@emotion/core";

let card= css`position:absolute;
backface-visibility: hidden;
transition: transform 0.7s;

`;
let imgSize = css`height:200px;
width:150px;@media screen and (min-width:800px){
    height:160px;
width:120px;
};@media screen and (min-height:1000px){
    height:220px;
    width:165px;
}`

class Card extends React.Component{
    constructor(props){
        super(props);        
    }

    render(){
        return(
            
            <div 
            onClick={(event)=>this.props.flipCard(this.props.cardIndex)}
            css={css`
            position:relative;
            display:inline-block;
            transition:opacity 1s;
            
            ${this.props.active?"":"opacity:0;"}
            ${imgSize}
            `}>
                <div className={"Front"} css={css`
                ${card} ${imgSize}
                ${this.props.flipped?"":"transform: rotateY( 180deg );"}
                ${!this.props.active?"transform: rotateY( 0deg );":""}
                `}><img src={this.props.front} css={css`${imgSize}` }/></div>
                <div className={"Back"} css={css`${card}
                ${this.props.flipped?"transform: rotateY( -180deg );":""}
                ${!this.props.active?"transform: rotateY( -180deg );":""}
                
                `}><img src={this.props.back} css={css`${imgSize}`}/> </div>
            </div>
        )
    }
}
export default Card;