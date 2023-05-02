import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faChevronUp, faChevronDown, faDisplay } from '@fortawesome/free-solid-svg-icons';

export const CardProyecto = ({ titulo, urlImagen, urlGitHub, urlWeb, descripcion, herramientas }) => {
  const [infoExtra, setInfoExtra] = useState(false)

  const handleExtraInfo = () => {
    setInfoExtra(!infoExtra)
  }

  return (
    <div className='card-proyecto'>
      <div 
      className="img-proyecto-container" 
      style={{ 
        backgroundImage: `url("${urlImagen}")`,
        height: infoExtra ? '0%' : '70%',
        opacity: infoExtra ? 0 : 1
      }}
      />
      <div 
      className="info-proyecto"
      style={{ 
        height: infoExtra ? '300px' : '96px',
      }}
      >
        <FontAwesomeIcon icon={infoExtra ? faChevronDown : faChevronUp} className="flecha-proyecto" onClick={handleExtraInfo} />
        <h5>{titulo}</h5>
        <div className="btns-proyecto">
          <a href={urlGitHub} target='e_blank'>
            <div className="btn-proyecto">
              <FontAwesomeIcon icon={faGithub} className="icono-proyecto" />
            </div>
          </a>
          <a href={urlWeb} target='e_blank'>
            <div className="btn-proyecto">
              <FontAwesomeIcon icon={faDisplay} className="icono-proyecto" />
            </div>
          </a>
        </div>
        <div 
        className="info-extra-proyecto"
        style={{
          display: infoExtra ? 'flex' : 'none',
          gap: infoExtra ? '10px' : '0'
        }}
        >
          <p className="descripcion-proyecto">{descripcion}</p>
          <h6>Herramientas</h6>
          <div className="herramientas-proyecto">
            <ul>
              {
                herramientas.map((element, i) => (
                  <li key={i}>{element}</li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
