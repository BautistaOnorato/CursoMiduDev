import React, { useEffect, useState } from 'react'
import { CardProyecto } from '../CardProyecto'
import { useRequest } from '../../hooks/useRequest'

export const Proyectos = () => {
  const { data, getData } = useRequest({ tabla: 'proyectos' })

  useEffect(() => {
    getData()
  }, [])

  return (
    <section className="proyectos" id='proyectos'>
      <h3>Proyectos</h3>
      <div className="proyectos-container">
        <div className="grid-proyectos">
          {
            data?.map(proyecto => (
              <CardProyecto
                key={proyecto.id}
                titulo={proyecto.nombre}
                urlImagen={proyecto.url_imagen}
                urlGitHub={proyecto.url_github}
                urlWeb={proyecto.url_web}
                descripcion={proyecto.descripcion}
                herramientas={proyecto.herramientas}
              />
            ))
          }
        </div>
      </div>
    </section>
  )
}
