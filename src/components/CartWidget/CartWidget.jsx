/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import './CartWidget.css'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import { Badge } from '@material-tailwind/react'

const CartWidget = () => {

    const {totalProductos} = useContext(CartContext)

    return (
        <>
        <Link to='/Proyecto-React-REGAHARD/cart'>
            <Badge content={totalProductos}>
                <ShoppingBagIcon className="h-8 w-8" /> 
            </Badge>
        </Link>

        </>
    )
}

export default CartWidget