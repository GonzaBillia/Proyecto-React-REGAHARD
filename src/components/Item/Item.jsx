import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({producto}) => {

    return (
        <Link to={`/descripcion/${producto.id}`}>
            <div key={producto.id}>
                <div className='card'>
                    <h3>{producto.modelo}</h3>
                    <img className='cardImg' src={producto.img}/>
                    <h4>Marca: {producto.marca}</h4>
                    <h4>Precio: ${producto.precio}</h4>
                    <p>Stock: {producto.stock}</p>
                </div>
                
                
            </div>
        
        </Link>
    )
}

export default Item