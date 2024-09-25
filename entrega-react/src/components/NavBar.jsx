import React from 'react'
import '../styles/navbar.css'
import CartWidget from './CartWidget'
const NavBar = () => {
  return (
    <ul>
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#productos">Productos</a></li>
        <li><a href="#contacto">Contacto</a></li>
        <CartWidget/>
    </ul>
  )
}

export default NavBar