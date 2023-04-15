import React from 'react'

export const Circle = ({ children, isSelected }) => {
  const classname = isSelected ? 'circle is-selected' : 'circle'

  return (
    <div className={classname}>
      {children}
    </div>
  )
}
