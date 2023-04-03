import React from "react"

const Square = ({ square, index, handleGamePlay }) => {
  const handleClick = () => {
    handleGamePlay(index)
  }

  return (
    <>
      <button className="square btn" onClick={handleClick}>{square}</button>
    </>
  )
}
export default Square
