import React, { useContext } from 'react'
import CartItem from '../CartItem/CartItem'
import { CartContext } from '../context/CartContext'
import './Cart.css'
import { Link } from 'react-router-dom'

const Cart = () => {

    const {cart, total, vaciarCarrito, eliminarItem} = useContext(CartContext)

    const eliminar = (producto) =>{
        eliminarItem(producto)
        
    }

    return (

        <div className='container mx-auto grid grid-cols-12 grid-rows-12'>
            <div className='cartContainer col-start-1 col-span-6 row-span-full row-start-2'>
                {cart.length == 0 
                ?
                    <div className='col-start-2 col-end-6 row-span-1 row-start-2'>
                        <h2 className='text-3xl m-4'>No hay Productos en el Carrito</h2>
                    </div>
                :
                    <div className='' key={cart.id}>
                        {
                            cart.map((producto)=>{
                                return(
                                    <CartItem key={producto.id} producto={producto} eliminar={eliminar}/>
                                )
                            })
                        }
                    </div>
                }
            </div>
            

            <div className='cartContainer col-start-8 col-end-11 row-start-2 row-end-6 row-span-3'>
                <div className='m-5'>
                    <div className='mb-4'>
                        <h2 className='text-4xl'>Total: $ {total}</h2>
                    </div>
                    <div className='mt-8'>
                        <button className='flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2' onClick={vaciarCarrito}>Vaciar Carrito</button>
                    </div>
                    <div className='my-4'>
                        <Link to='/Proyecto-React-REGAHARD/checkout'>
                            <button className='flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>Finalizar Compra</button>
                        </Link>
                    </div>
                    
                </div>

                
                
            </div>
            
        </div>
        
    )
}

export default Cart