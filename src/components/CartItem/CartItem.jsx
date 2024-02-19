import React from 'react'
import './CartItem.css'

const CartItem = ({producto, eliminar}) => {

    const eliminarItem = ()=>{
        eliminar(producto)
    }

    return (
        <div className='cardContainer'key={producto.id}>
            <div className='cartCard'>
                    
                    <img className='cardCartImg' src={producto.img}/>
                    
                    <div className='cardData'>
                        <h4>{producto.marca}</h4>
                        <h3>{producto.modelo}</h3>
                        <h5>Precio: ${producto.precio}</h5>
                        <p>Cantidad: {producto.cantidad}</p>
                    </div>

                    <button onClick={eliminarItem}>Eliminar</button>
                </div>
        </div>
    )
}

export default CartItem