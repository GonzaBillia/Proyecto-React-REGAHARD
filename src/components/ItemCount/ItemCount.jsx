import React, { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({initial, stock, agregar}) => {

    const [contador, setContador] = useState(1)

    const incrementar = ()=>{
        if(contador<stock){
            setContador(contador+1)
        }
    }

    const decrementar = ()=>{
        if(contador>initial){
            setContador(contador-1)
        }
    }

    const agregarAlCarrito = ()=>{
        agregar(contador)
    }

    return (

        <div className=''>

            <div className='boton'>
                <button className='mt-5 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2' onClick={decrementar}>-</button>
                <p className='text-xl mx-6 mt-5'>{contador}</p>
                <button className='mt-5 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2' onClick={incrementar}>+</button>
            </div>
            
            <div className='boton'>
                <button className='mt-5 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2' onClick={agregarAlCarrito}>Agregar al Carrito</button>
            </div>
            

        </div>
    )
}

export default ItemCount