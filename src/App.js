import React from "react";
import ReactDOM from "react-dom";
import Modal from "./Modal.js";
import ModalBg from "./ModalBg.js";
import levels from "./Levels";
import Table from "./Table";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.levels = levels;
    this.state = {
      currentLevel: 3,
      score: 0,
      playerName: "",
      showModal: true,
      isStart: true,
      isPlaying: false,
      isLevelChange: false,
      isGameEnd: false,
      gameStartTime: null,
      gameEndTime: null
    };
    this.submitPlayerName = this.submitPlayerName.bind(this);
    this.hadlePlayerNameChange = this.hadlePlayerNameChange.bind(this);
    this.changeStartTime = this.changeStartTime.bind(this);
    this.changeLevel = this.changeLevel.bind(this);
    this.endGame = this.endGame.bind(this);
  }
  changeLevel() {
    this.setState({ isPlaying: false, gameEndTime: new Date() });
      if(this.currentLevel>=this.levels.length){
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
  endGame(){

  }

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
      <Table
        changeStartTime={this.changeStartTime}
        cards={this.levels[this.state.currentLevel].cards}
        changeLevel={this.changeLevel}
      />
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
