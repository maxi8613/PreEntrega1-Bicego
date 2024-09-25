import React from 'react'
import cart from '../assets/cart.svg'
const CartWidget = () => {
  return (
    <div>
    <img className='imagen' src={cart} alt="carrito" />
    <span className='contador'>(0)</span>
    </div>
  )
}

export default CartWidget