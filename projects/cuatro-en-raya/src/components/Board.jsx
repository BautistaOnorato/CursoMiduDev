import React, { useState } from 'react'
import { Circle } from './Circle'
import { TURNS, boardSize } from '../constants'
import { Arrow } from './Arrow'
import { WinnerModal } from './WinnerModal'

export const Board = () => {
  const [board, setBoard] = useState(Array(boardSize.filas).fill(Array(boardSize.columnas).fill(null)))
  const [turn, setTurn] = useState(TURNS.azul)
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(boardSize.filas).fill(Array(boardSize.columnas).fill(null)))
    setTurn(TURNS.azul)
    setWinner(null)
  }

  const verTablero = () => {
    setWinner('hide')
  }

  const tirarFicha = (board, index) => {
    // console.log(board[board.length - 1][index])
    for (let i = board.length - 1; i >= 0; i--) {
      if (board[i][index] === null) {
        return i
      }
    }
    return null
  }

  const checkWinnerColumn = (board, index, turn) => {
    let count = 0
    for (let i = board.length - 1; i >= 0; i--) {
      if (board[i][index] === turn) {
        count++
      } else {
        count = 0
      }
      if (count === 4) {
        break
      }
    }
    return count
  }

  const checkWinnerRow = (board, index, turn) => {
    let count = 0
    for (let i = 0; i < board[index].length; i++) {
      if (board[index][i] === turn) {
        count++
      } else {
        count = 0
      }
      if (count === 4) {
        break
      }
    }
    return count
  }

  const checkWinnerDiagonal = (board, fila, columna, turn) => {
    const diagonales = [[], [], [], []]
    let row = fila
    let col = columna
    let count = 0

    // Recorremos hacia aabajo y hacia al derecha
    while (row < board.length && col < board[0].length) {
      diagonales[0].push(board[row][col])
      row++
      col++
    }

    // Recorremos hacia arriba y hacia la izquierda
    row = fila - 1
    col = columna - 1
    while (row >= 0 && col >= 0) {
      diagonales[0].unshift(board[row][col])
      row--
      col--
    }

    // Recorremos hacia abajo y hacia la izquierda
    row = fila
    col = columna
    while (row < board.length && col >= 0) {
      diagonales[1].push(board[row][col])
      row++
      col--
    }

    // Recorremos hacia arriba y hacia la derecha
    row = fila - 1
    col = columna + 1
    while (row >= 0 && col < board[0].length) {
      diagonales[1].unshift(board[row][col])
      row--
      col++
    }

    // Recorremos hacia arriba y hacia la izquierda
    row = fila
    col = columna
    while (row >= 0 && col >= 0) {
      diagonales[2].unshift(board[row][col])
      row--
      col--
    }

    // Recorremos hacia abajo y hacia la derecha
    row = fila + 1
    col = columna + 1
    while (row < board.length && col < board[0].length) {
      diagonales[2].push(board[row][col])
      row++
      col++
    }

    // Recorremos hacia arriba y hacia la derecha
    row = fila
    col = columna
    while (row >= 0 && col < board[0].length) {
      diagonales[3].unshift(board[row][col])
      row--
      col++
    }

    // Recorremos hacia abajo y hacia la izquierda
    row = fila + 1
    col = columna - 1
    while (row < board.length && col >= 0) {
      diagonales[3].push(board[row][col])
      row++
      col--
    }

    for (let i = 0; i < diagonales.length; i++) {
      for (let j = 0; j < diagonales[i].length; j++) {
        if (diagonales[i][j] === turn) {
          count++
        } else {
          count = 0
        }
        if (count === 4) {
          return count
        }
      }
    }

    return count
  }

  const checkEndgame = (board) => {
    return board.every((row) => row.every(cell => cell !== null))
  }

  const updateBoard = (index) => {
    const newBoard = JSON.parse(JSON.stringify(board))
    const filaDisponible = tirarFicha(newBoard, index)
    if (filaDisponible === null || winner) return
    // Actualizar board
    newBoard[filaDisponible][index] = turn
    setBoard(newBoard)
    // Actualizar turno
    const newTurn = turn === TURNS.azul ? TURNS.rojo : TURNS.azul
    setTurn(newTurn)
    // verificar ganador
    const columnaGanadora = checkWinnerColumn(newBoard, index, turn)
    const filaGanadora = checkWinnerRow(newBoard, filaDisponible, turn)
    const diagonalGanadora = checkWinnerDiagonal(newBoard, filaDisponible, index, turn)
    // console.log(columnaGanadora)
    if (columnaGanadora === 4 || filaGanadora === 4 || diagonalGanadora === 4) {
      setWinner(turn)
      console.log('winna')
    } else if (checkEndgame(newBoard)) {
      setWinner(false)
    }
  }

  return (
    <>
      <button onClick={resetGame}>Empezar de nuevo</button>
      <section className='arrows' style={{ gridTemplateColumns: `repeat(${boardSize.columnas}, 1fr)` }}>
        {
          board[0].map((row, i) => (
            <Arrow key={i} updateBoard={updateBoard} index={i} />
          ))
        }
      </section>
      <section
        className='board'
        style={{
          gridTemplateColumns: `repeat(${boardSize.columnas}, 1fr)`,
          gridTemplateRows: `repeat(${boardSize.filas}, 1fr)`
        }}
      >
        {
          board.map((row, i) => {
            return (
              row.map((cell, index) => (
                <Circle key={index + i * 7}>
                  {cell}
                </Circle>
              ))
            )
          })
        }
      </section>
      <section className='turns'>
        <Circle isSelected={turn === TURNS.azul}>{TURNS.azul}</Circle>
        <Circle isSelected={turn === TURNS.rojo}>{TURNS.rojo}</Circle>
      </section>
      {
       (winner !== null && winner !== 'hide')
         ? (
           <WinnerModal winner={winner} reset={resetGame} verTablero={verTablero} />
           )
         : ''
      }
    </>
  )
}
