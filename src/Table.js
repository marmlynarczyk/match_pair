import React from "react";
const images = require("../images/*.*");
/** @jsx jsx */ import { css, jsx, keyframes } from "@emotion/core";
import Card from "./Card";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.createDeck = this.createDeck.bind(this);
    this.shuffle = this.shuffle.bind(this);
    this.flipCard = this.flipCard.bind(this);
    this.state = {
      deck: this.createDeck(this.props.cards),
      noOfFlippedCards: 0,
      noOfDisabledCards: 0,
      pauseGame: false
    };
  }
componentDidMount(){
this.props.changeStartTime(new Date())
}

  createDeck(noOfCards) {
    let newDeck = [];
    for (let c = 0; c < noOfCards; ++c) {
      newDeck.push({
        cardId: c,
        src: images["card" + (1 + Math.floor(c / 2))].png,
        active: true,
        flipped: false,
        firstCardIndex: null
      });
    }
    return this.shuffle(newDeck);
  }

  flipCard(index) {
    if (this.state.pauseGame) {
      return;
    }
    const newDeck = [...this.state.deck];
    const currentCard = newDeck[index];
    currentCard.flipped = true;
    if (this.state.noOfFlippedCards == 0) {
      this.setState({
        deck: newDeck,
        noOfFlippedCards: 1,
        firstCardIndex: index
      });
      return;
    }
    const prevCard = newDeck[this.state.firstCardIndex];
    if(Math.floor(prevCard.cardId)==Math.floor(currentCard.cardId)){
      return
    }
    let disabled = 0;
    this.setState({ deck: newDeck, pauseGame: true });
    window.setTimeout(() => {
      newDeck.forEach((value) => {
        
        
        if (currentCard.src == prevCard.src) {
          currentCard.active = prevCard.active = false;
          disabled=2;
        }

        value.flipped = false;
      });
      if(this.state.noOfDisabledCards+2>=this.props.cards){
        this.props.changeLevel();
        return;
      }
      this.setState((prevState)=>{
        return{
        deck: newDeck,
        noOfFlippedCards: 0,
        firstCardIndex: null,
        pauseGame: false,
        noOfDisabledCards:prevState.noOfDisabledCards+disabled
        
      }});
    }, 1000);
  }

  shuffle(array) {
    let i = array.length,
      j = 0,
      temp;

    while (i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
  render() {
    return (
      <div
        className={"table"}
        css={css`
          width: 600px;
          height: 400px;
        `}
      >
        {this.state.deck.map((value, index) => (
          <Card
            key={index}
            front={value.src}
            back={images.back.png}
            cardId={value.cardId}
            active={value.active}
            flipped={value.flipped}
            flipCard={this.flipCard}
            cardIndex={index}
          />
        ))}
      </div>
    );
  }
}
export default Table;
