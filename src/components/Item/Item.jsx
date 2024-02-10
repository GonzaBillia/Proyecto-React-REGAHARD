import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({producto}) => {

    return (
        <Link>
            <div key={producto.id} className= 'item'>
                <h3>{producto.modelo}</h3>
                <img src={producto.img}/>
                <h4>Marca: {producto.marca}</h4>
                <h4>Precio: ${producto.precio}</h4>
                <p>Stock: {producto.stock}</p>
                
            </div>
        
        </Link>
    )
}

export default Item