import React, { useEffect } from 'react'
import { CardExperiencia } from '../CardExperiencia'
import { NoExperiencia } from '../NoExperiencia'
import { useRequest } from '../../hooks/useRequest'

export const Experiencias = () => {
  const { data, getData } = useRequest({ tabla: 'experiencias' })

  useEffect(() => {
    getData()
  }, [])

  return (
    <section id="experiencia">
      <h3>Experiencias</h3>
      {
        data?.length > 0 ? (
          <div className="grid-experiencia">
            {
              data?.map(experiencia => (
                <CardExperiencia 
                  nombre={experiencia.nombre} 
                  fechaInicio={experiencia.fecha_inicio} 
                  fechaFinal={experiencia.fecha_final} 
                  urlImagen={experiencia.url_imagen}
                />
              ))
            }
          </div>
        ) :
        (
          <NoExperiencia />
        )
      }
    </section>
  )
}
