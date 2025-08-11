import React, { useState } from 'react';
import './TicTacToe.css';

function TicTacToe() {
  const initialBoard = Array(9).fill("");
  const [board, setBoard] = useState(initialBoard);
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [winner, setWinner] = useState(null);
  const [winningCells, setWinningCells] = useState([]);
  const [score, setScore] = useState({ X: 0, O: 0, Tie: 0 });

  const currentPlayer = count % 2 === 0 ? "X" : "O";

  const toggle = (index) => {
    if (lock || board[index]) return;
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    setCount(count + 1);
    checkWin(newBoard);
  };

  const checkWin = (currentBoard) => {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];

    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]) {
        setWinner(currentBoard[a]);
        setWinningCells(pattern);
        setLock(true);
        setScore(prev => ({ ...prev, [currentBoard[a]]: prev[currentBoard[a]] + 1 }));
        return;
      }
    }

    if (currentBoard.every(cell => cell)) {
      setWinner("Tie");
      setLock(true);
      setScore(prev => ({ ...prev, Tie: prev.Tie + 1 }));
    }
  };

  const resetGame = () => {
    setBoard(initialBoard);
    setCount(0);
    setLock(false);
    setWinner(null);
    setWinningCells([]);
  };

  const resetAll = () => {
    resetGame();
    setScore({ X: 0, O: 0, Tie: 0 });
  };

  return (
    <div className="container">
      <h1 className="title">Tic Tac Toe <span>Pro</span></h1>

      <div className="scoreboard">
        <div className="score x-score">X: {score.X}</div>
        <div className="score tie-score">Tie: {score.Tie}</div>
        <div className="score o-score">O: {score.O}</div>
      </div>

      <div className="turn-indicator">
        Turn: <span className={currentPlayer === "X" ? "x-cell" : "o-cell"}>{currentPlayer}</span>
      </div>

      <div className="game-board">
        {board.map((cell, index) => (
          <div
            key={index}
            className={`boxes ${cell === "X" ? "x-cell" : cell === "O" ? "o-cell" : ""} 
              ${winningCells.includes(index) ? "winner-cell" : ""}`}
            onClick={() => toggle(index)}
          >
            {cell}
          </div>
        ))}
      </div>

      {winner && (
        <div className="result">
          {winner === "Tie" ? "It's a Tie!" : `${winner} Wins!`}
        </div>
      )}

      <div className="buttons">
        <button className="reset" onClick={resetGame}>Next Round</button>
        <button className="reset reset-all" onClick={resetAll}>Reset All</button>
      </div>
    </div>
  );
}

export default TicTacToe;
