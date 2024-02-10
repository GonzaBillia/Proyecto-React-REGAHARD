import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({producto}) => {

    return (
        <div key={producto.id} className='itemDetail'>
            <h3>Marca: {producto.marca}</h3>
            <h3>Modelo: {producto.modelo}</h3>
            <img src={producto.img} alt={producto.alt} className='cardImg'/>
            <h4>Precio: ${producto.precio}</h4>
            <p>Categoria: {producto.tipoItem}</p>

            <ItemCount initial={1} stock={producto.stock}/>

        </div>
    )
}

export default ItemDetail