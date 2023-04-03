import React from "react"

const Square = ({ value, index, handleGamePlay, disabled }) => {
  const handleClick = () => {
    handleGamePlay(index)
  }

  return (
    <>
      <button className="square btn" onClick={handleClick} disabled={disabled}>{value}</button>
    </>
  )
}
export default Square
