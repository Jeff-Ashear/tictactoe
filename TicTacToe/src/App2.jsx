import { useState } from "react";

function Square({ value, onSquareClick }) {

  return (
    <button className="square" onClick={onSquareClick}>
      { value }
    </button>
  )
}


export default function Board() {
  const [xIsNext, setXIsNext] = useState(true)
  const [squares, setSquares] = useState(Array(9).fill(null))

  function handleClick(i) { 
    if (squares[i]) {
      return
    }

    const nextSquares = squares.slice()

    if (xIsNext) {
      nextSquares[i] = "X"
    }
    else {
      nextSquares[i] = "O"
    }

    setSquares(nextSquares)
    setXIsNext(!xIsNext)

    calculateWinner(squares)
    //make a new array with the x's and o's in position at the index that matches the position of the square that was clicked
    
  }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>     
    </>
  )
}

function calculateWinner(nextSquares) {
  let endConditions = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
  ]

  //compare the state of the board to the endConditions each time a square is clicked
  for (let i = 0; i < nextSquares.length; i++) {
   
  }
}