import React from 'react'

export const Herramienta = ({ nombre, urlImagen }) => {
  return (
    <div className="herramienta">
      <img src={urlImagen} alt={nombre} />
      <p>{nombre}</p>
    </div>
  )
}
