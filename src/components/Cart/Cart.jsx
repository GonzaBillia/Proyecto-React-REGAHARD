import React, { useContext } from 'react'
import CartItem from '../CartItem/CartItem'
import { CartContext } from '../context/CartContext'
import './Cart.css'

const Cart = () => {

    const {cart, total, vaciarCarrito} = useContext(CartContext)

    return (

        <div className='cartGridContainer'>
            {cart.length == 0 
            ?
                <h2>No hay Productos en el Carrito</h2>
            :
                <div className='CartContainer' key={cart.id}>
                    {
                        cart.map((producto)=>{
                            return(
                                <CartItem key={producto.id} producto={producto}/>
                            )
                        })
                    }
                </div>
            }

            <div className='totalContainer'>
                <div className='totalCard'>
                    <h2>Total: $ {total}</h2>
                    <button onClick={vaciarCarrito}>Vaciar Carrito</button>
                </div>

                
                
            </div>
            
        </div>
        
    )
}

export default Cart