/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import './CartWidget.css'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {

    const {totalProductos} = useContext(CartContext)

    return (
        <>
        <Link to='/cart'> <img className='h-8 w-auto' src="/src/assets/-shopping-cart_90604.png" alt="" /> </Link>
        <p>{totalProductos}</p>

        </>
    )
}

export default CartWidget