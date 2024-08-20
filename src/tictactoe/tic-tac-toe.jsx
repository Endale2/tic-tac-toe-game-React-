import React from 'react'
import "./TicTacToe.css"
import O from "../assets/O.png"
import X from "../assets/X.png"
function TicTacToe() {
  return (
    <div className="container">
      <div className="title">Tic Tac Toe<span>by React</span></div>
      <div className="game-board">
        <div className="row1">
          <div className="boxes"></div>
          <div className="boxes"></div>
          <div className="boxes"></div>
        </div>
        <div className="row2">
          <div className="boxes"></div>
          <div className="boxes"></div>
          <div className="boxes"></div>
        </div>
        <div className="row3">
          <div className="boxes"></div>
          <div className="boxes"></div>
          <div className="boxes"></div>
        </div>
        
      </div>
      <button className="reset">Reset</button>
    </div>
  )
}

export default TicTacToe
