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
    this.state = {
      currentLevel: 0,
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
  }
  outOfTime(time){
    window.setTimeout(()=>this.setState({showModal:true,isRetry:true}),time*1000)
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
    this.setState({ isPlaying: false, gameEndTime: new Date() });
    if (this.currentLevel >= this.levels.length) {
      this.endGame();
      return;
    }
    window.setTimeout(() => {
      this.setState(prevState => {
        return {
          currentLevel: ++prevState.currentLevel,
          showModal: true,
          isLevelChange: true
        };
      });
    }, 1000);
  }
  endGame() {}

  changeStartTime(dateObj) {
    this.setState({ gameStartTime: dateObj });
  }

  submitPlayerName(name) {
    this.setState({
      playerName: name,
      showModal: false,
      isStart: false,
      isPlaying: true
    });
    this.outOfTime(this.levels[this.state.currentLevel].time);
  }

  hadlePlayerNameChange(event) {
    this.setState({ playerName: event.target.value });
  }

  render() {
    return this.state.showModal ? (
      <Modal>
        <ModalBg
          isStart={this.state.isStart}
          submitPlayerName={this.submitPlayerName}
          hadlePlayerNameChange={this.hadlePlayerNameChange}
          playerName={this.state.playerName}
        ></ModalBg>
      </Modal>
    ) : (
      <div>
        <ScoreTimeBar playerName={this.state.playerName} time={this.levels[this.state.currentLevel].time} score={this.state.score} />
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
