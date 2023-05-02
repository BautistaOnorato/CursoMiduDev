import React from 'react'
import { rutas } from '../../utils/rutas'

export const Menu = ({ open, setOpen, handleAnchor }) => {
  return (
    <div className={`menu ${open}`}>
      <ul>
        {
          rutas.map(ruta => (
            <li key={ruta.id} onClick={setOpen}>
              <p className='ruta-navbar' onClick={(e) => handleAnchor(e, ruta.nombre)}>{ruta.nombre}</p>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
