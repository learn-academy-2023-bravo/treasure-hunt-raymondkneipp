import React, { useState } from "react"
import "./App.css"
import Square from "./components/Square"

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])

  const handleGamePlay = (clickedSquare) => {
    let updateBoard = [...board]
    updateBoard[clickedSquare] = '🌳'
    setBoard(updateBoard)
  }

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className="board">
        {board.map((square, index) => (
          <Square 
            square={square} 
            index={index} 
            key={index}
            handleGamePlay={handleGamePlay}
          />
        ))}
      </div>
    </>
  )
}

export default App
