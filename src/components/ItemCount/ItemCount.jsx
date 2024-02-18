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

        <div className='itemCount'>

            <div className='boton'>
                <button onClick={decrementar}>-</button>
                <p>{contador}</p>
                <button onClick={incrementar}>+</button>
            </div>
            
            <div className='boton'>
                <button onClick={agregarAlCarrito}>Agregar al Carrito</button>
            </div>
            

        </div>
    )
}

export default ItemCount