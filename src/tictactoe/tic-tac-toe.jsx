import React from 'react'
import "./TicTacToe.css"
import O from "../assets/O.png"
import X from "../assets/X.png"
function TicTacToe() {
  return (
    <div className="container">
      <div className="title">Tic Tac Toe<span>by React</span></div>
      <div className="game-board">


      </div>
      <button className="reset">Reset</button>
    </div>
  )
}

export default TicTacToe
