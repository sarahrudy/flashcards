const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('./Card');
const Deck = require('./Deck');
const Round = require('./Round')

class Game {
  constructor() {
    this.currentRound = currentRound
    // should keep track of current round
  }

  start() {
    // method that starts everything
    // creates Cards (new Card)
    // create new Round (new Round) using Deck( new Deck)
  
    // printMessage()
    // printQuestion()

  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;