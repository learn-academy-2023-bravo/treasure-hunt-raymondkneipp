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

    if (clickedSquare === treasureLocation) {
      updateBoard[clickedSquare] = '💰'
    } else if (clickedSquare === bombLocation) {
      updateBoard[clickedSquare] = '💣'
    } else {
      updateBoard[clickedSquare] = '🌳'
    }

    setBoard(updateBoard)
  }

  const randomBoardLocation = (exclude = board.length) => {
    let result = Math.floor(Math.random() * board.length)
    return (result === exclude) ? randomBoardLocation(exclude) : result
  }

  const [treasureLocation, setTreasureLocation] = useState(randomBoardLocation())
  const [bombLocation, setBombLocation] = useState(randomBoardLocation(treasureLocation))

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
