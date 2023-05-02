import React from 'react'

export const CardExperiencia = ({ nombre, fechaInicio, fechaFinal, urlImagen }) => {
  return (
    <div className='experiencia'>
      <div className='img-experiencia' style={{ backgroundImage: `url("${urlImagen}")` }}/>
      <div className="info-experiencia">
        <h6>{nombre}</h6>
        <p>{fechaInicio} - {fechaFinal ? fechaFinal : <span>Hoy</span>}</p>
      </div>
    </div>
  )
}
