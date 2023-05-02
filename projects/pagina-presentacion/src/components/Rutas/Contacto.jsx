import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

export const Contacto = () => {
  return (
    <section id="contacto">
      <h3>Contacto</h3>
      <div className="contacto-container">
        <div className="info-contacto">
          <p>Estoy buscando oportunidades como desarrollador Back end, Front end o Fullstack.</p>
          <p>Si crees que mi perfil se adecua con lo que buscas, <strong>¡no dudes en contactarme!</strong></p>
        </div>
        <div className="contacto-btns">
          <a href="mailto:bautistaonorato27@gmail.com" className='btn-bienvenida'>
            <FontAwesomeIcon icon={faEnvelope}/>
            Email
          </a>
          <a href="https://www.linkedin.com/in/bautista-onorato-940566272/" target='e_blank' className='btn-bienvenida'>
            <FontAwesomeIcon icon={faLinkedin}/>
            Linkedin
          </a>
        </div>
      </div>
    </section>
  )
}
