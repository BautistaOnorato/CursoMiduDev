import React, { useEffect, useState } from 'react'
import { OBJETIVOS } from '../../utils/consts'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import { calcularEdad } from '../../utils/utils'

export const Inicio = () => {

  const [selectedIndex, setSelectedIndex] = useState(0)

  const selectNewIndex = (index, objetivos) => {
    const nextIndex = index === objetivos.length - 1 ? 0 : index + 1
    setSelectedIndex(nextIndex)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      selectNewIndex(selectedIndex, OBJETIVOS)
    }, 1000)
    return () => clearInterval(interval)
  }, [selectedIndex])

  return (
    <section className="inicio" id='inicio'>
      <div className="bienvenido">
        <p>¡Bienvenido!</p>
        <h1>
          Mi nombre es <strong>Bautista Onorato</strong>
          <span>Tengo {calcularEdad('2004/04/27')} años</span>
          <span>Apunto a ser desarrollador <strong>{OBJETIVOS[selectedIndex]}</strong></span>
        </h1>
        <div className="btns-bienvenido">
          <a 
          href='http://localhost:5173/src/assets/CV.pdf' 
          target='e_blank' 
          download='CV - Bautista Onorato'
          className='btn-bienvenida'
          >
            Resume
            <FontAwesomeIcon icon={faFile} className="icono-bienvenida" />
          </a>
          <a href='https://github.com/BautistaOnorato' target='_eblank' className='btn-bienvenida'>
            GitHub
            <FontAwesomeIcon icon={faGithub} className="icono-bienvenida" />
          </a>
          <a href='https://www.linkedin.com/in/bautista-onorato-940566272/' target='_eblank' className='btn-bienvenida'>
            Linkedin
            <FontAwesomeIcon icon={faLinkedin} className="icono-bienvenida" />
          </a>
        </div>
      </div>
      <img src="https://pps.whatsapp.net/v/t61.24694-24/56153781_2461978430702222_2207781651646251008_n.jpg?ccb=11-4&oh=01_AdSJRZxg5OBAeK2QMlt67tMRQgtJZbTg9fDvxioRFqmUHg&oe=6453D1FD" alt="" />
    </section>
  )
}
