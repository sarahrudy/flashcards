const chai = require('chai')
const expect = chai.expect

const Game = require('../src/Game');
const Round = require('../src/Round');
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

describe('Game', function() {
  let game

  beforeEach(function() {
    game = new Game()
  })

  it('should be a function', function() {
    expect(Game).to.be.a('function')
  })

  it('should be an instance', function() {
    expect(game).to.be.an.instanceOf(Game)
  })

  it('should be able to track current round', function() {
    expect(game.currentRound).to.equal(null)
  })

  it('should be able to start game', function() {
    expect(game.start).to.be.a('function')
  })
})