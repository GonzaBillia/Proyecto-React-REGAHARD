import React from 'react'
import './CartItem.css'

const CartItem = ({producto, eliminar}) => {

    const eliminarItem = ()=>{
        eliminar(producto)
    }

    return (
        <div className='my-4'key={producto.id}>
            <div className='flex justify-center items-center grid grid-cols-4'>
                    
                    <img className='col-span-1 max-h-32 h-full w-full object-contain' src={producto.img}/>
                    
                    <div className='col-span-2 ms-3'>
                        <div className='text-3xl mb-3'>
                            {producto.marca}{" "}{producto.modelo}
                        </div>
                        <div className='text-xl'>
                            <h5>Precio: ${producto.precio}</h5>
                            <p>Cantidad: {producto.cantidad}</p>
                        </div>
                    </div>
                    <div className='col-span-1 col-start-4'>
                        <button className='flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2' onClick={eliminarItem}>Eliminar</button>
                    </div>
                </div>
        </div>
    )
}

export default CartItem