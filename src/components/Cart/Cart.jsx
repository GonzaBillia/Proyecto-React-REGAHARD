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

        <div className='container mx-auto grid grid-cols-4 lg:grid-cols-12 lg:grid-rows-12 pt-20 lg:pt-32'>
            <div className='cartContainer mx-2 shadow-md rounded-md col-start-1 col-span-7 row-span-full row-start-1'>
                {cart.length == 0 
                ?
                    <div className='col-start-2 col-end-6 row-span-1 row-start-2 min-h-72'>
                        <h2 className='text-3xl m-4'>No hay Productos en el Carrito</h2>
                    </div>
                :
                    <div className='m-5' key={cart.id}>
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
            

            <div className='cartContainer mx-2 shadow-md rounded-md col-span-4 lg:col-start-8 lg:col-end-12 lg:row-start-1 lg:row-end-7 lg:row-span-3'>
                <div className='m-5'>
                    <div className='mb-4'>
                        <h2 className='text-3xl xl:text-4xl'>Total: $ {total}</h2>
                    </div>
                    <div className='mt-8 flex justify-center'>
                        <button className='flex min-w-56 items-center justify-center rounded-md border border-transparent bg-deep-purple-500 px-8 py-3 text-base font-medium text-white hover:bg-deep-purple-900 duration-200' onClick={vaciarCarrito}>Vaciar Carrito</button>
                    </div>
                    <div className='my-4 flex justify-center'>
                        <Link to='/Proyecto-React-REGAHARD/checkout'>
                            <button className='flex min-w-56 items-center justify-center rounded-md border border-transparent bg-deep-purple-500 px-8 py-3 text-base font-medium text-white hover:bg-deep-purple-900 duration-200'>Finalizar Compra</button>
                        </Link>
                    </div>
                    
                </div>

                
                
            </div>
            
        </div>
        
    )
}

export default Cart