import React from 'react'
import { Square } from './Square'

export const WinnerModal = ({ winner, resetGame }) => {

  const handleClick = () => {
    resetGame()
  }

  return (
    <section className="winner">
      <div className="text">
        <h2>
          {
            winner === false ? 'Empate' : 'Ganó:'
          }
        </h2>

        <header className="win">
          {<Square>{winner === false ? '🤝' : winner}</Square>}
        </header>

        <footer>
          <button onClick={handleClick}>Empezar de nuevo</button>
        </footer>
      </div>
    </section>
  )
}
