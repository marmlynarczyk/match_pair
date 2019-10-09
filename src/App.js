import React from "react";
import ReactDOM from "react-dom";
import Modal from "./Modal.js";
import ModalBg from "./ModalBg.js";
import levels from "./Levels";
import Table from "./Table";
import ScoreTimeBar from "./ScoreTimeBar.js";




class App extends React.Component {
  constructor(props) {
    super(props);
    this.levels = levels;
    this.outOfTimeID = null;
    this.state = {
      currentLevel: 19,
      score: 0,
      playerName: "",
      showModal: true,
      isStart: true,
      isPlaying: false,
      isLevelChange: false,
      isGameEnd: false,
      isRetry: false,
      gameStartTime: null,
      gameEndTime: null,
      outOfTime:null
    };
    this.submitPlayerName = this.submitPlayerName.bind(this);
    this.hadlePlayerNameChange = this.hadlePlayerNameChange.bind(this);
    this.changeStartTime = this.changeStartTime.bind(this);
    this.changeLevel = this.changeLevel.bind(this);
    this.endGame = this.endGame.bind(this);
    this.addScore = this.addScore.bind(this);
    this.outOfTime = this.outOfTime.bind(this);
    this.startNewLevel = this.startNewLevel.bind(this)
    this.startNewGame = this.startNewGame.bind(this)
    this.retryLevel = this.retryLevel.bind(this)
  }
  outOfTime(){    
    this.outOfTimeID = window.setTimeout(()=>this.setState({showModal:true,isRetry:true}),this.levels[this.state.currentLevel].time*1000)
  }
  endGame() {
    console.log('endgame')
    this.setState({showModal:true,isGameEnd:true});    
  }
  retryLevel(){
    let punishment = this.state.score-this.levels[this.state.currentLevel].cards*100;
    let correctedScore = 0;
    if(punishment>=0){
      correctedScore = punishment
    }else{
      correctedScore = 0;
    }
    this.setState(()=>{return{
      score:correctedScore,
      showModal:false,
      isPlaying:true,
      gameStartTime:null,
      isRetry:false
    }},()=>this.outOfTime());
    
  }
  startNewGame(){
    this.setState({
      currentLevel:0,
      score:0,
      isStart:true,
      isRetry:false,
      isGameEnd:false,   
      showModal:true,
      isLevelChange:false
         
    })
  }
  startNewLevel(){      
    if(this.state.currentLevel+1>=this.levels.length){
      this.endGame();
      return
    }
    this.setState((prevState)=>{
      return {
        currentLevel:prevState.currentLevel+1,
        showModal:false,
        isPlaying:true,
        isLevelChange:false,
        gameStartTime:null,
        gameEndTime:null
      }
    },this.outOfTime)
  }
  
  addScore(number){
    this.setState((prevState)=>{
      if(this.state.score<=0&&number<0){
        return
      }
      return{
      score:prevState.score+number
    }})
  }
  changeLevel() {       
    window.clearInterval(this.outOfTimeID);
    this.setState({ isPlaying: false, gameEndTime: new Date()});
    if (this.currentLevel >= this.levels.length) {
      this.endGame();
      return;
    }
    window.setTimeout(() => {
      this.setState({          
          showModal: true,
          isLevelChange: true        
      });
    }, 1000);
  }

  


  changeStartTime(dateObj) {
    this.setState({ gameStartTime: dateObj });
  }

  submitPlayerName(name) {
    this.setState(()=>{return{
      playerName: name,
      showModal: false,
      isStart: false,
      isPlaying: true
    }},()=>this.outOfTime());    
  }

  hadlePlayerNameChange(event) {
    this.setState({ playerName: event.target.value });
  }

  render() {    
    let timeLeft=null;
    if(this.state.gameEndTime&&this.state.gameStartTime){
      timeLeft=this.levels[this.state.currentLevel].time-Math.floor((this.state.gameEndTime-this.state.gameStartTime)/1000);
    }
    return this.state.showModal ? (
      <Modal >
        <ModalBg
          isStart={this.state.isStart}
          isLevelChange={this.state.isLevelChange}
          isRetry={this.state.isRetry}
          submitPlayerName={this.submitPlayerName}
          hadlePlayerNameChange={this.hadlePlayerNameChange}
          playerName={this.state.playerName}
          addScore={this.addScore}
          score={this.state.score}
          timeLeft={timeLeft}
          startNewLevel={this.startNewLevel}
          retryLevel={this.retryLevel}
          isRetry={this.state.isRetry}
          startNewGame={this.startNewGame}
          isGameEnd={this.state.isGameEnd}
          
        ></ModalBg>
      </Modal>
    ) : (
      <div style={{display:"inline-block"}}>
        <ScoreTimeBar playerName={this.state.playerName} time={this.levels[this.state.currentLevel].time} score={this.state.score} currentLevel={this.state.currentLevel}/>
        <Table
        addScore={this.addScore}
          changeStartTime={this.changeStartTime}
          cards={this.levels[this.state.currentLevel].cards}
          changeLevel={this.changeLevel}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
