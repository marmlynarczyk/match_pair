import React from "react";
import Timer from "./Timer.js"
import Score from "./Score.js"
import PlayerName from './PlayerName.js'


function ScoreTimeBar(props){
    return (<>
    <PlayerName playerName={props.playerName}/>
    <Timer time={props.time}/>
    <Score score={props.score}/>
    </>)
}
export default ScoreTimeBar;