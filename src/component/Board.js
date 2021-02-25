import React, { useState } from 'react';
import Square from './Square';

const Board = () => {
  const initialState = {
    squares: Array(9).fill(null),
    xIsNext: true,
  }
  const [state, setState] = useState(initialState);
  const handleClick = (i) => {
    const squares = [...state.squares];
    squares[i] = state.xIsNext ? 'X' : 'O';
    setState(
      {
        squares: squares,
        xIsNext: !state.xIsNext,
      }
    );
  }

  const renderSquare = (i) => {
    return (
      <Square
        value={state.squares[i]}
        onClick={() => { handleClick(i) }}
      />
    )
  }
  const status = 'Next player: ' + (state.xIsNext ? 'X' : 'O');
  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}
export default Board;