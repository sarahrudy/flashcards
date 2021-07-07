const chai = require('chai')
const expect = chai.expect

const Turn = require('../src/Turn')
const Card = require('../src/Card')

describe('Turn', function() {
  let card, turn

  beforeEach(function() {
    card = new Card(1, 'What do iterator methods take in as their first argument?', ['callback function', 'current element', 'an array'], 'callback function')
    turn = new Turn('current element', card)
  })

  it('should be a function', function() {
    expect(Turn).to.be.a('function')
  })

  it('should be able to store a user\'s guess', function() {  
    expect(turn.guess).to.equal('current element')
    // expect(turn.returnGuess()).to.equal('current element')
  })
 
  it('should be able to store current card in deck', function() {
    expect(turn.card).to.equal(card)
  })
})

// describe block for returnGuess() method
describe('returnGuess()', function() {
  let card, turn

  beforeEach(function() {
    card = new Card(1, 'What do iterator methods take in as their first argument?', ['callback function', 'current element', 'an array'], 'callback function')
    turn = new Turn('current element', card)
  })

  it('should return the user\'s guess', function() {
    const returnedGuess = turn.returnGuess() 

    expect(returnedGuess).to.equal(card)
  })
})

// describe block for returnCard() method

