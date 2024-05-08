import React from 'react'
import './CartItem.css'

const CartItem = ({producto, eliminar}) => {

    const eliminarItem = ()=>{
        eliminar(producto)
    }

    return (
        <div className='my-4 shadow-md rounded-md'key={producto.id}>
            <div className='justify-center items-center grid grid-cols-4'>
                    
                    <img className='col-span-1 max-h-32 h-full w-full object-contain' src={producto.img}/>
                    
                    <div className='col-span-2 ms-3'>
                        <div className='text-xl md:text-2xl xl:text-3xl mb-3 truncate capitalize'>
                            {producto.marca}{" "}{producto.modelo}
                        </div>
                        <div className='text-md md:text-lg xl:text-xl'>
                            <h5>Precio: $<b>{producto.precio}</b></h5>
                            <p>Cantidad: {producto.cantidad}</p>
                        </div>
                    </div>
                    <div className='col-span-1 col-start-4 flex justify-center'>
                        <button className='flex w-auto items-center justify-center rounded-md border border-gray-300 bg-white px-8 py-3 text-base font-medium text-black hover:bg-red-600 hover:text-white focus:outline-none focus:ring-2  focus:ring-offset-2 duration-200' onClick={eliminarItem}>X</button>
                    </div>
                </div>
        </div>
    )
}

export default CartItem