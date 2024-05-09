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
                <button className='mt-5 flex w-full items-center justify-center rounded-md border border-transparent bg-deep-purple-500 duration-200 px-8 py-3 text-base font-medium text-white hover:bg-deep-purple-900' onClick={decrementar}>-</button>
                <p className='text-xl mx-6 mt-5'>{contador}</p>
                <button className='mt-5 flex w-full items-center justify-center rounded-md border border-transparent bg-deep-purple-500 duration-200 px-8 py-3 text-base font-medium text-white hover:bg-deep-purple-900' onClick={incrementar}>+</button>
            </div>
            
            <div className='boton'>
                <button className='mt-5 flex w-full items-center justify-center rounded-md border border-transparent bg-deep-purple-500 duration-200 px-8 py-3 text-base font-medium text-white hover:bg-deep-purple-900' onClick={agregarAlCarrito}>Agregar al Carrito</button>
            </div>
            

        </div>
    )
}

export default ItemCount