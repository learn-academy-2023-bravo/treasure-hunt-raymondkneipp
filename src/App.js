import React, { useState } from "react"
import "./App.css"
import Square from "./components/Square"
import Counter from "./components/Counter"

const initialSquare = "🤔"
const totalSquares = 9
const initialBoard = new Array(totalSquares).fill(initialSquare)
const initCount = 5
const nothingEmoji = '🌳'
const badEmoji = '💣'
const goodEmoji = '💰'

const App = () => {
  const [board, setBoard] = useState(initialBoard)
  const [counter, setCounter] = useState(initCount)

  const handleGamePlay = (clickedSquare) => {
    let updateBoard = [...board]

    if (clickedSquare === treasureLocation) {
      updateBoard[clickedSquare] = goodEmoji
    } else if (clickedSquare === bombLocation) {
      updateBoard[clickedSquare] = badEmoji
    } else {
      setCounter(prev => --prev)
      updateBoard[clickedSquare] = nothingEmoji
    }

    setBoard(updateBoard)
  }

  const randomBoardLocation = (exclude) => {
    let result = Math.floor(Math.random() * board.length)
    return (result === exclude) ? randomBoardLocation(exclude) : result
  }

  const [treasureLocation, setTreasureLocation] = useState(randomBoardLocation())
  const [bombLocation, setBombLocation] = useState(randomBoardLocation(treasureLocation))

  const handleRestart = () => {
    setBoard(initialBoard)
    const newTreasureLocation = randomBoardLocation()
    const newBombLocation = randomBoardLocation(newTreasureLocation)

    setTreasureLocation(newTreasureLocation)
    setBombLocation(newBombLocation)
    setCounter(initCount)
  }

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <Counter value={counter} />
      <div className="board">
        {board.map((value, index) => (
          <Square 
            value={value} 
            index={index} 
            key={index}
            handleGamePlay={handleGamePlay}
            disabled={value !== initialSquare}
          />
        ))}
      </div>
      <button onClick={handleRestart} className='btn btn--restart'>Restart</button>
    </>
  )
}

export default App
