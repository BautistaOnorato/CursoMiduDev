import React from 'react'

export const Square = ({ children, updateBoard, index, isSelected }) => {
  const classname = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div className={classname} onClick={handleClick}>
      {children}
    </div>
  )
}
