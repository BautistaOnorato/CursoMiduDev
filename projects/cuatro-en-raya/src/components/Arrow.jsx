import React from 'react'

export const Arrow = ({ index, updateBoard }) => {
  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div className='arrow' onClick={handleClick}>
      ⬇
    </div>
  )
}
