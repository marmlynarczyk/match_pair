import React from "react";
import ReactDOM from "react-dom";
import Modal from './Modal.js'
import ModalBg from "./ModalBg.js";
import levels from "./Levels";
import Table from "./Table";




class App extends React.Component{
    constructor(props){
        super(props);   
        this.levels = levels;     
        this.state = {
            currentLevel : 10,
            score:0,
            playerName:"",
            showModal:true,
            isStart:true
        }
        this.submitPlayerName = this.submitPlayerName.bind(this);
        this.hadlePlayerNameChange = this.hadlePlayerNameChange.bind(this);
    }
    submitPlayerName(name){        
        this.setState({playerName:name,showModal:false,isStart:false});        
    }
    hadlePlayerNameChange(event){
        this.setState({playerName:event.target.value})
    }
    render(){        
        return this.state.showModal? <Modal><ModalBg 
        isStart={this.state.isStart}
        submitPlayerName={this.submitPlayerName}
        hadlePlayerNameChange={this.hadlePlayerNameChange}
        playerName={this.state.playerName}
        ></ModalBg></Modal>:<Table cards={this.levels[this.state.currentLevel].cards}/>;
    }
}

ReactDOM.render(<App />,document.getElementById('root'));