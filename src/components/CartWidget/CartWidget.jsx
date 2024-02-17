/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import './CartWidget.css'
import { CartContext } from '../context/CartContext'

const CartWidget = () => {

    const {totalProductos} = useContext(CartContext)

    return (
        <>
        
        <img className='img' src="/-shopping-cart_90604.png" alt="" />
        <p>{totalProductos}</p>

        </>
    )
}

export default CartWidget