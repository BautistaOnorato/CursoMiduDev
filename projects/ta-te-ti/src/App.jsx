import React, { useState } from 'react'
import { Square } from './components/Square'
import { TURNS } from './constants'
import confetti from 'canvas-confetti'
import { WinnerModal } from './components/WinnerModal'
import { checkWinner, checkEndGame } from './logic/board'
import { saveGame } from './logic/localStorage'

function App () {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage || TURNS.X
  })
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  const updateBoard = (index) => {
    // verifica si se puede seguir jugando o no
    if (board[index] || winner) return
    // actualiza el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    // actualiza el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    // guarda el tablero
    saveGame(newBoard, newTurn)
    // revisra si hay ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  return (
    <main className='board'>
      <h1>Ta te ti</h1>
      <button onClick={resetGame}>Reset</button>
      <section className='game'>
        {
          board.map((cell, index) => (
            <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
            >
              {cell}
            </Square>
          ))
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      {
        winner !== null && (
          <WinnerModal winner={winner} resetGame={resetGame} />
        )
      }
    </main>
  )
}

export default App
