import React, { useContext } from 'react'
import CartItem from '../CartItem/CartItem'
import { CartContext } from '../context/CartContext'

const Cart = () => {

    const {cart} = useContext(CartContext)

    return (
        <div key={cart.id}>
            {
                cart.map((producto)=>{
                    return(
                        <CartItem key={producto.id} producto={producto}/>
                    )
                })
            }
        </div>
    )
}

export default Cart