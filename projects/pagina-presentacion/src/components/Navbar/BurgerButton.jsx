import React from 'react'

export const BurgerButton = ({ open, setOpen }) => {
  
  return (
    <div className={`burger nav-icon-5 ${open}`} onClick={setOpen}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}
