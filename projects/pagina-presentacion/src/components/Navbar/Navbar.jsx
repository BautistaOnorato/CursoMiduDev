import React, { useState } from 'react'
import { rutas } from '../../utils/rutas'
import { BurgerButton } from './BurgerButton'
import { Menu } from './Menu'

export const Navbar = () => {
  const [open, setOpen] = useState('')

  const handleMenu = () => {
    document.body.classList.toggle('menu-abierto')
    if (open === 'close') {
      setOpen('open')
      return
    }
    if (open === 'open') {
      setOpen('close')
      return
    }
    setOpen('open')
  }

  const handleAnchor = (event, link) => {
    event.preventDefault()
    const element = document.getElementById(link.toLowerCase())
    const headerOffset = 100
    const elementPosition = element.offsetTop
    const offsetPosition = elementPosition - headerOffset
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }

  return (
    <div className='encabezado'>
      <header>
        <nav>
          <ul>
            {
              rutas.map(ruta => (
                <li key={ruta.id}>
                  <p className='ruta-navbar' onClick={(e) => handleAnchor(e, ruta.nombre)}>{ruta.nombre}</p>
                </li>
              ))
            }
          </ul>
        </nav>
        <BurgerButton open={open} setOpen={handleMenu}/>
      </header>
      <Menu open={open} setOpen={handleMenu} handleAnchor={handleAnchor}/>
    </div>
  )
}
