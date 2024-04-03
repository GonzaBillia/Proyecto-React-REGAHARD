/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import './CartWidget.css'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {

    const {totalProductos} = useContext(CartContext)

    return (
        <>
        <Link to='/cart'> <img className='h-8 w-auto' src="https://firebasestorage.googleapis.com/v0/b/proyecto-final-react-cod-c21ca.appspot.com/o/-shopping-cart_90604.png?alt=media&token=c1a92bd9-1f47-4e2b-9e39-3f232b5c1e70" alt="" /> </Link>
        <p>{totalProductos}</p>

        </>
    )
}

export default CartWidget