import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({producto, agregarSolo}) => {

    const agregarAlCarrito = () =>{
        producto.cantidad = 1
        agregarSolo(producto)
        
    }

    return (
        
            <div className='card' key={producto.id}>
                <Link to={`/descripcion/${producto.id}`}>
                <div>
                    <h3>{producto.modelo}</h3>
                    <img className='cardImg' src={producto.img}/>
                    <h4>Marca: {producto.marca}</h4>
                    <h4>Precio: ${producto.precio}</h4>
                    <p>Stock: {producto.stock}</p>
                    
                </div>
                </Link>
                <button onClick={agregarAlCarrito}>Agregar al Carrito</button>
            </div>
        
        
    )
}

export default Item