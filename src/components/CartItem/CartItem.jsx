import React from 'react'

const CartItem = ({producto, cantidad}) => {
    return (
        <div key={producto.id}>
            <div className='cartCard'>
                    <h3>{producto.modelo}</h3>
                    <img className='cardImg' src={producto.img}/>
                    <h4>Marca: {producto.marca}</h4>
                    <h4>Precio: ${producto.precio}</h4>
                    <p>Cantidad: {producto.cantidad}</p>
                </div>
        </div>
    )
}

export default CartItem