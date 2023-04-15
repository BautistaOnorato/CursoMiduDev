import React from 'react'
import { Circle } from './Circle'

export const WinnerModal = ({ winner, reset, verTablero }) => {
  const handleClickReset = () => {
    reset()
  }

  const handleHide = () => {
    verTablero()
  }

  return (
    <section className='winner'>
      <div className='text'>
        <h2>
          {
            winner === false ? 'Empate' : 'Ganó:'
          }
        </h2>

        <header className='win'>
          <Circle>{winner === false ? '🤝' : winner}</Circle>
        </header>

        <footer>
          <button onClick={handleClickReset}>Empezar de nuevo</button>
          <button onClick={handleHide}>Ver tablero</button>
        </footer>
      </div>
    </section>
  )
}
