import React, { useState } from 'react';
import './TicTacToe.css';
import O from '../assets/O.png';
import X from '../assets/X.png';

function TicTacToe() {
  const initialBoard = ["", "", "", "", "", "", "", "", ""];
  const [board, setBoard] = useState(initialBoard);
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [winner, setWinner] = useState(null);

  const toggle = (index) => {
    if (lock || board[index]) return;
    const newBoard = [...board];
    newBoard[index] = count % 2 === 0 ? "x" : "o";
    setBoard(newBoard);
    setCount(count + 1);
    checkWin(newBoard);
  };

  const checkWin = (currentBoard) => {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]) {
        setWinner(currentBoard[a]);
        setLock(true);
        return;
      }
    }

    if (currentBoard.every(cell => cell)) {
      setWinner("tie");
      setLock(true);
    }
  };

  const resetGame = () => {
    setBoard(initialBoard);
    setCount(0);
    setLock(false);
    setWinner(null);
  };

  return (
    <div className="container">
      <div className="title">Tic Tac Toe <span>by React</span></div>
      <div className="game-board">
        {board.map((cell, index) => (
          <div key={index} className="boxes" onClick={() => toggle(index)}>
            {cell && <img src={cell === "x" ? X : O} alt={cell} />}
          </div>
        ))}
      </div>
      {winner && <div className="result">{winner === "tie" ? "It's a Tie!" : `${winner === "x" ? "X" : "O"} Wins!`}</div>}
      <button className="reset" onClick={resetGame}>Reset</button>
    </div>
  );
}

export default TicTacToe;
