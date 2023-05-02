import React, { useEffect } from 'react'
import { Herramienta } from '../Herramienta'
import { useRequest } from '../../hooks/useRequest'

export const Herramientas = () => {
  const { data, getData } = useRequest({ tabla: 'herramientas' })

  useEffect(() => {
    getData()
  }, [])

  return (
    <section id="herramientas">
      <h3>Herramientas</h3>
      <div className="herramientas-container">
        <div className="herramientas-grid-container">
         {
          data?.map(herramienta => (
            <Herramienta nombre={herramienta.nombre} urlImagen={herramienta.url_imagen}/>
          ))
         }
        </div>
      </div>
    </section>
  )
}
