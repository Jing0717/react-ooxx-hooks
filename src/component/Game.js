import React, { useState } from 'react';
import Board from './Board';

const Game = () => {
  const initialState = {
    history: [{
      squares: Array(9).fill(null),
    }],
    xIsNext: true,
  }

  const [state, setState] = useState(initialState);

  const history = [...state.history];
  const current = history[history.length - 1];
  const winner = calculateWinner([...current.squares]);
  let status;
  if (winner) {
    status = "Winner is " + winner;
  } else {
    status = 'Next player: ' + (state.xIsNext ? 'X' : 'O');
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  const handleClick = (i) => {
    const history = state.history;
    const current = history[history.length - 1];
    const squares = [...current.squares];
    console.log(history)
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = state.xIsNext ? 'X' : 'O';
    setState(
      {
        history: history.concat([{
          squares: squares,
        }]),
        squares: squares,
        xIsNext: !state.xIsNext,
      }
    );
  }
  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={current.squares}
          onClick={(i) => handleClick(i)}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}
export default Game;